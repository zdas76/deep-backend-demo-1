import mongoose from "mongoose";
import QueryBuilder from "../../builder/QueryBuilders";
import { CourseSearchableFields } from "./course.constant";
import { TCourse, TCourseFaculty } from "./course.interfact";
import { Course, CourseFaculty } from "./course.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const craateCoursetoDB = async (payLoad: TCourse) => {
  const result = await Course.create(payLoad);
  return result;
};

const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    Course.find().populate("preRequisiteCourses.course"),

    query
  )
    .search(CourseSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await courseQuery.modelQuery;
  return result;
};

const getSignalCourseFromDB = async (id: string) => {
  const result = await Course.findById(id).populate(
    "preRequisiteCourses.course"
  );
  return result;
};

const deleteSignalCourseFromDB = async (id: string) => {
  const result = await Course.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

const updateCourseIntoDB = async (id: string, payLoad: Partial<TCourse>) => {
  const { preRequisiteCourses, ...courseRemainingData } = payLoad;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const updateBasicCourseInfo = await Course.findByIdAndUpdate(
      id,
      courseRemainingData,
      {
        new: true,
        runValidators: true,
        session,
      }
    );
    if (!updateBasicCourseInfo) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to update course");
    }
    if (preRequisiteCourses && preRequisiteCourses.length > 0) {
      const deletedPreRquisites = preRequisiteCourses
        .filter((el) => el.course && el.isDeleted)
        .map((el) => el.course);
      const deletedPreRequisiteCourses = await Course.findByIdAndUpdate(
        id,
        {
          $pull: {
            preRequisiteCourses: { course: { $in: deletedPreRquisites } },
          },
        },
        { new: true, runValidators: true, session }
      );
      if (!deletedPreRequisiteCourses) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to update course");
      }

      const newPrerequisites = preRequisiteCourses?.filter(
        (el) => el.course && !el.isDeleted
      );
      const newPreRequisiteCourses = await Course.findByIdAndUpdate(
        id,
        {
          $addToSet: { preRequisiteCourses: { newPrerequisites } },
        },
        { new: true, runValidators: true, session }
      );
      if (!newPreRequisiteCourses) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to update course");
      }
    }

    const result = await Course.findById(id).populate(
      "preRequisiteCourses.course"
    );
    await session.commitTransaction();
    await session.endSession();
    return result;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to update course");
  }
};

const assignFacultiesWithCourseIntoDB = async (
  id: string,
  payLoad: Partial<TCourseFaculty>
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    { course: id, $addToSet: { faculties: { $each: payLoad } } },
    { upsert: true, new: true }
  );
  return result;
};

const removeFacultiesWithCourseFromDB = async (
  id: string,
  payLoad: Partial<TCourseFaculty>
) => {
  const result = await CourseFaculty.findByIdAndUpdate(
    id,
    { $pull: { faculties: { $in: payLoad } } },
    { new: true }
  );
  return result;
};

export const CourseService = {
  craateCoursetoDB,
  getAllCoursesFromDB,
  getSignalCourseFromDB,
  deleteSignalCourseFromDB,
  updateCourseIntoDB,
  assignFacultiesWithCourseIntoDB,
  removeFacultiesWithCourseFromDB,
};
