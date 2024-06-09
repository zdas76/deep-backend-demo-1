"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseRouters = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlwares/validateRequest"));
const OfferedCourse_validation_1 = require("./OfferedCourse.validation");
const OfferedCourse_controller_1 = require("./OfferedCourse.controller");
const route = express_1.default.Router();
route.post("/create-offered-course", (0, validateRequest_1.default)(OfferedCourse_validation_1.OfferedCourseValidation.createOfferedCourseValidationSchema), OfferedCourse_controller_1.OfferedCourseController.crateOfferedCourse);
exports.OfferedCourseRouters = route;
