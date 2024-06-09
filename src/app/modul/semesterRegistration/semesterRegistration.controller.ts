import httpStatus from "http-status";
import catchAsync from "../../middlwares/catchAsync";
import sendResponse from "../../utiils/sendRespons";
import { SemesterRegistrationService } from "./semesterRegistration.service";

const createSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationService.createSemesterRegistrationIntoDB(
      req.body
    );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Registration successfully",
    data: result,
  });
});

const getAllSemesterRegistration = catchAsync(async (req, res) => {
  const result =
    await SemesterRegistrationService.getAllSemesterRegistrationIntoDB(
      req.query
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Semester Registration is retrived successfully",
    data: result,
  });
});

const getSignalSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result =
    await SemesterRegistrationService.getSignalSemesterRegistrationIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "One semester Registration is retrived successfully",
    data: result,
  });
});

const updateSemesterRegistration = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result =
    await SemesterRegistrationService.updateSemesterRegistrationIntoDB(
      id,
      req.body
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "One semester Registration is retrived successfully",
    data: result,
  });
});

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistration,
  getSignalSemesterRegistration,
  updateSemesterRegistration,
};
