import httpStatus from "http-status";
import catchAsync from "../../middlwares/catchAsync";
import sendResponse from "../../utiils/sendRespons";
import { DepartmentService } from "./department.service";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await DepartmentService.crateAcademicDepartmenttoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department is created successfully",
    data: result,
  });
});

const getAllDepartment = catchAsync(async (req, res) => {
  const result = await DepartmentService.getAllDepartmentyFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All Academic Department is revers successfully",
    data: result,
  });
});

const getDepartmentById = catchAsync(async (req, res) => {
  const { departmentId } = req.params;

  const result = await DepartmentService.getDepartmentByIDfromDB(departmentId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department is revers successfully",
    data: result,
  });
});

const updateDepartmentById = catchAsync(async (req, res) => {
  const { departmentId } = req.params;

  const result = await DepartmentService.updateDepartmentByIntoDB(
    departmentId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department updated successfully",
    data: result,
  });
});

export const DepartmentController = {
  createAcademicDepartment,
  getAllDepartment,
  getDepartmentById,
  updateDepartmentById,
};
