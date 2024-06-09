import httpStatus from "http-status";
import catchAsync from "../../middlwares/catchAsync";
import sendResponse from "../../utiils/sendRespons";
import { FacultyService } from "./academicFaculty.servis";

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await FacultyService.crateAcademicFacultytoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic faculty is created successfully",
    data: result,
  });
});

const getAllFaculty = catchAsync(async (req, res) => {
  const result = await FacultyService.getAllFacultyFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Academic Faculty is revers successfully",
    data: result,
  });
});

const getFacultyById = catchAsync(async (req, res) => {
  const { facultyId } = req.params;

  const result = await FacultyService.getFacultyByIDfromDB(facultyId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty is revers successfully",
    data: result,
  });
});

const updateFacultyById = catchAsync(async (req, res) => {
  const { facultyId } = req.params;

  const result = await FacultyService.updateFacultyIntoDB(facultyId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty updated successfully",
    data: result,
  });
});

export const FacultyController = {
  createAcademicFaculty,
  getAllFaculty,
  getFacultyById,
  updateFacultyById,
};
