import httpStatus from "http-status";
import catchAsync from "../../middlwares/catchAsync";
import sendResponse from "../../utiils/sendRespons";
import { OfferedCoursedService } from "./OfferedCourse.service";

const crateOfferedCourse = catchAsync(async (req, res) => {
  const result = await OfferedCoursedService.createOfferedCoursedIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Offered Course is created successfully!",
    data: result,
  });
});

const getAllOfferedCourse = catchAsync(async (req, res) => {
  const result = await OfferedCoursedService.getAllOfferedCoursedFromDB(
    req.query
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Offered Course is created successfully!",
    data: result,
  });
});

// const crateOfferedCourse = catchAsync(async (req, res) => {
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Offered Course is created successfully!",
//     data: result,
//   });
// });

// const crateOfferedCourse = catchAsync(async (req, res) => {
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Offered Course is created successfully!",
//     data: result,
//   });
// });

export const OfferedCourseController = {
  crateOfferedCourse,
  getAllOfferedCourse,
};
