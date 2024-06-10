import { TOfferCourse } from "./OfferedCourse.interface";
import { OfferedCourse } from "./OfferedCourse.model";

const createOfferedCoursedIntoDB = async (payLoad: TOfferCourse) => {
  const {semesterRegistration, academicFaculty, academicDepartment, course, faculty}  =payLoad
  
  const result = await OfferedCourse.create(payLoad);
  return result;
};

const getAllOfferedCoursedFromDB = async (PayLoad: Record<string, unknown>) => {
  const result = await OfferedCourse.find(PayLoad);
  return result;
};

export const OfferedCoursedService = {
  createOfferedCoursedIntoDB,
  getAllOfferedCoursedFromDB,
};
