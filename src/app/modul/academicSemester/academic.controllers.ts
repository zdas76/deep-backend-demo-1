import httpStatus from "http-status";
import catchAsync from "../../middlwares/catchAsync";
import sendResponse from "../../utiils/sendRespons";
import { AcademicSemesterServices } from "./academic.service";

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic secester is created successfully",
    data: result,
  });
});

const getAllSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllSemestersfromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester Revers successfully",
    data: result,
  });
});

const getSemesterById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await AcademicSemesterServices.getSemesterByIdfromDB(
    id as string
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester Revers successfully by Id",
    data: result,
  });
});

const getSemesterByIdAndUpdate = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.getSemesterByIdAndUpdatetoDB(
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester Revers successfully by Id and updated",
    data: result,
  });
});
export const AcademicSemesterController = {
  createAcademicSemester,
  getAllSemesters,
  getSemesterById,
  getSemesterByIdAndUpdate,
};
