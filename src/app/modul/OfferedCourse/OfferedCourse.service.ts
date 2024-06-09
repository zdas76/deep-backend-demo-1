import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { SemesterRegistration } from "../semesterRegistration/semesterRegistration.model";
import { TOfferCourse } from "./OfferedCourse.interface";
import { OfferedCourse } from "./OfferedCourse.model";
import { AcademicFaculty } from "../academicFaculty/academicFaculty.model";
import { AcademicDepartment } from "../academicDepartment/department.model";
import { Course } from "../course/course.model";
import { Faculty } from "../Faculty/faculty.model";

const createOfferedCoursedIntoDB = async (payLoad: TOfferCourse) => {
  const {
    semesterRegistration,
    academicFaculty,
    academicDepartment,
    course,
    faculty,
  } = payLoad;

  const isSemesterRegistrationExists = await SemesterRegistration.findById(
    semesterRegistration
  );
  if (!isSemesterRegistrationExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Semester registration not found");
  }
  const academicSemester = isSemesterRegistrationExists.academicSemester;

  const isAcademicFacultyExists = await AcademicFaculty.findById(
    academicFaculty
  );
  if (!isAcademicFacultyExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Academic Faculty not found");
  }

  const isAcademicDepartmentExists = await AcademicDepartment.findById(
    academicDepartment
  );

  if (!isAcademicDepartmentExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Academic Department not found");
  }

  const isCoursetExists = await Course.findById(course);

  if (!isCoursetExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Course not found");
  }

  const isFacultyExists = await Faculty.findById(faculty);

  if (!isFacultyExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Faculty not found");
  }

  const isDepartmentBelongToFaculty = await AcademicDepartment.findOne({
    academicFaculty,
    academicDepartment,
  });
  if (isDepartmentBelongToFaculty) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `This ${isAcademicDepartmentExists.name} is not belog to this ${isAcademicFacultyExists.name}`
    );
  }

  const result = await OfferedCourse.create({ ...payLoad, academicSemester });
  return result;
};

const getAllOfferedCoursedFromDB = async (payLoad: Record<string, unknown>) => {
  const result = await OfferedCourse.find(payLoad);
  return result;
};

export const OfferedCoursedService = {
  createOfferedCoursedIntoDB,
  getAllOfferedCoursedFromDB,
};
