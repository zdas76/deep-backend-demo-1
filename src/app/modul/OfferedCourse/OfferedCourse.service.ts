import { TOfferCourse } from "./OfferedCourse.interface";
import { OfferedCourse } from "./OfferedCourse.model";

const createOfferedCoursedIntoDB = async (PayLoad: TOfferCourse) => {
  const result = await OfferedCourse.create(PayLoad);
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
