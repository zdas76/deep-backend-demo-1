import { UserServices } from "./user.service";
import sendResponst from "../../utiils/sendRespons";
import httpStatus from "http-status";

import catchAsync from "../../middlwares/catchAsync";

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponst(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is created successfully",
    data: result,
  });
});

export const userController = {
  createStudent,
};
