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
exports.UserServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../../config"));
const academic_model_1 = require("../academicSemester/academic.model");
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
const user_utils_1 = require("./user.utils");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const createStudentIntoDB = (passwrod, studentData) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.password = passwrod || config_1.default.default_pass;
    userData.role = "student";
    const admissionSemester = yield academic_model_1.AcademicSemester.findById(studentData.admissionSemester);
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        if (admissionSemester) {
            userData.id = yield (0, user_utils_1.generateStudentId)(admissionSemester);
        }
        //   set manually generat id
        const newUser = yield user_model_1.User.create([userData], { session });
        if (!newUser) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Faild to create user");
        }
        studentData.id = newUser[0].id;
        studentData.user = newUser[0]._id;
        const newStudent = yield student_model_1.Student.create([studentData], { session });
        if (!newStudent) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create student");
        }
        yield session.commitTransaction();
        yield session.endSession();
        return newStudent;
    }
    catch (error) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create");
    }
});
exports.UserServices = {
    createStudentIntoDB,
};
