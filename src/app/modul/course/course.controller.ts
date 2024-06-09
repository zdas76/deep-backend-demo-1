import httpStatus from "http-status";
import catchAsync from "../../middlwares/catchAsync";
import sendResponse from "../../utiils/sendRespons";
import { CourseService } from "./course.service";

const createCourse = catchAsync(async (req, res) => {
  const result = await CourseService.craateCoursetoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Course is created successfully",
    data: result,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await CourseService.getAllCoursesFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Courses are retrived successfully",
    data: result,
  });
});

const getSignelCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseService.getSignalCourseFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Course is retrived successfully",
    data: result,
  });
});

const deleteSignelCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseService.deleteSignalCourseFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Course is deleted successfully",
    data: result,
  });
});

const updateCourse = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await CourseService.updateCourseIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Course is updeated successfully",
    data: result,
  });
});

const assignFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;
  const result = await CourseService.assignFacultiesWithCourseIntoDB(
    courseId,
    faculties
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculties assigned successfully",
    data: result,
  });
});

const removeFacultiesWithCourse = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;
  const result = await CourseService.removeFacultiesWithCourseFromDB(
    courseId,
    faculties
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculties removed successfully",
    data: result,
  });
});

export const CourseControllers = {
  createCourse,
  getAllCourses,
  getSignelCourse,
  deleteSignelCourse,
  updateCourse,
  assignFacultiesWithCourse,
  removeFacultiesWithCourse,
};
