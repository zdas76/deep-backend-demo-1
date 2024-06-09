import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { AcademicSemester } from "../academicSemester/academic.model";
import { TSemesterRegistration } from "./semesterRegistration.interface";
import { SemesterRegistration } from "./semesterRegistration.model";
import QueryBuilder from "../../builder/QueryBuilders";
import { SemesterRegStatus } from "./semesterRegistration.constant";

const createSemesterRegistrationIntoDB = async (
  payLoad: TSemesterRegistration
) => {
  // check if there any registered semester that is already UPCOMING/ONGOIN

  const checkSemesterStatus = await SemesterRegistration.findOne({
    $or: [{ status: "UPCOMING" }, { status: "ONGOING" }],
  });
  if (checkSemesterStatus) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `There is already a ${checkSemesterStatus.status} Register Semester! `
    );
  }
  const academicSemester = payLoad.academicSemester;

  const isAcademicSemesterExists = await AcademicSemester.findById(
    academicSemester
  );

  if (!isAcademicSemesterExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "This academic semester not found !"
    );
  }

  const isSemesterRegistrationExists = await SemesterRegistration.findOne({
    academicSemester,
  });
  if (isSemesterRegistrationExists) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "This Semester Registration already exists"
    );
  }

  const result = await SemesterRegistration.create(payLoad);
  return result;
};

const getAllSemesterRegistrationIntoDB = async (
  query: Record<string, unknown>
) => {
  const SemesRegQuery = new QueryBuilder(
    SemesterRegistration.find().populate("academicSemester"),
    query
  )
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await SemesRegQuery.modelQuery;
  return result;
};

const getSignalSemesterRegistrationIntoDB = async (id: string) => {
  const result = await SemesterRegistration.findById(id);
  return result;
};

const updateSemesterRegistrationIntoDB = async (
  id: string,
  payLoad: Partial<TSemesterRegistration>
) => {
  const checkSemester = await SemesterRegistration.findById(id);
  if (!checkSemester) {
    throw new AppError(httpStatus.NOT_FOUND, `This Semester found`);
  }

  if (checkSemester?.status === "ENDED") {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `This Semester is already ${checkSemester?.status}`
    );
  }
  // check is ongoing

  if (checkSemester.status === "UPCOMING" && payLoad.status === "ENDED") {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `Can not directly Change status form ${checkSemester?.status} to ${payLoad?.status}`
    );
  }

  if (
    checkSemester.status === SemesterRegStatus.ONGOING &&
    payLoad.status === SemesterRegStatus.UPCOMING
  ) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      `Can not directly Change status form ${checkSemester?.status} to ${payLoad?.status}`
    );
  }

  const result = await SemesterRegistration.findByIdAndUpdate(id, payLoad, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationIntoDB,
  getSignalSemesterRegistrationIntoDB,
  updateSemesterRegistrationIntoDB,
};
