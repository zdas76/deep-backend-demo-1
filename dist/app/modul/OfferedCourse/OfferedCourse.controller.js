"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../middlwares/catchAsync"));
const sendRespons_1 = __importDefault(require("../../utiils/sendRespons"));
const OfferedCourse_service_1 = require("./OfferedCourse.service");
const crateOfferedCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield OfferedCourse_service_1.OfferedCoursedService.createOfferedCoursedIntoDB(req.body);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Offered Course is created successfully!",
        data: result,
    });
}));
const getAllOfferedCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield OfferedCourse_service_1.OfferedCoursedService.getAllOfferedCoursedFromDB(req.query);
    (0, sendRespons_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Offered Course is created successfully!",
        data: result,
    });
}));
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
exports.OfferedCourseController = {
    crateOfferedCourse,
    getAllOfferedCourse,
};
