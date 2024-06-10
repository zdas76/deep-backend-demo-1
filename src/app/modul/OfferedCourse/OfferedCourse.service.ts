import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { SemesterRegistration } from "../semesterRegistration/semesterRegistration.model";
import { TOfferCourse } from "./OfferedCourse.interface";
import { OfferedCourse } from "./OfferedCourse.model";

const createOfferedCoursedIntoDB = async (PayLoad: TOfferCourse) => {
  const result = await OfferedCourse.create(PayLoad);
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
