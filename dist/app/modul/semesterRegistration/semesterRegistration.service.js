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
exports.SemesterRegistrationService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const academic_model_1 = require("../academicSemester/academic.model");
const semesterRegistration_model_1 = require("./semesterRegistration.model");
const QueryBuilders_1 = __importDefault(require("../../builder/QueryBuilders"));
const semesterRegistration_constant_1 = require("./semesterRegistration.constant");
const createSemesterRegistrationIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    // check if there any registered semester that is already UPCOMING/ONGOIN
    const checkSemesterStatus = yield semesterRegistration_model_1.SemesterRegistration.findOne({
        $or: [{ status: "UPCOMING" }, { status: "ONGOING" }],
    });
    if (checkSemesterStatus) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `There is already a ${checkSemesterStatus.status} Register Semester! `);
    }
    const academicSemester = payLoad.academicSemester;
    const isAcademicSemesterExists = yield academic_model_1.AcademicSemester.findById(academicSemester);
    if (!isAcademicSemesterExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This academic semester not found !");
    }
    const isSemesterRegistrationExists = yield semesterRegistration_model_1.SemesterRegistration.findOne({
        academicSemester,
    });
    if (isSemesterRegistrationExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This Semester Registration already exists");
    }
    const result = yield semesterRegistration_model_1.SemesterRegistration.create(payLoad);
    return result;
});
const getAllSemesterRegistrationIntoDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const SemesRegQuery = new QueryBuilders_1.default(semesterRegistration_model_1.SemesterRegistration.find().populate("academicSemester"), query)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield SemesRegQuery.modelQuery;
    return result;
});
const getSignalSemesterRegistrationIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield semesterRegistration_model_1.SemesterRegistration.findById(id);
    return result;
});
const updateSemesterRegistrationIntoDB = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const checkSemester = yield semesterRegistration_model_1.SemesterRegistration.findById(id);
    if (!checkSemester) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, `This Semester found`);
    }
    if ((checkSemester === null || checkSemester === void 0 ? void 0 : checkSemester.status) === "ENDED") {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, `This Semester is already ${checkSemester === null || checkSemester === void 0 ? void 0 : checkSemester.status}`);
    }
    // check is ongoing
    if (checkSemester.status === "UPCOMING" && payLoad.status === "ENDED") {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, `Can not directly Change status form ${checkSemester === null || checkSemester === void 0 ? void 0 : checkSemester.status} to ${payLoad === null || payLoad === void 0 ? void 0 : payLoad.status}`);
    }
    if (checkSemester.status === semesterRegistration_constant_1.SemesterRegStatus.ONGOING &&
        payLoad.status === semesterRegistration_constant_1.SemesterRegStatus.UPCOMING) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, `Can not directly Change status form ${checkSemester === null || checkSemester === void 0 ? void 0 : checkSemester.status} to ${payLoad === null || payLoad === void 0 ? void 0 : payLoad.status}`);
    }
    const result = yield semesterRegistration_model_1.SemesterRegistration.findByIdAndUpdate(id, payLoad, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.SemesterRegistrationService = {
    createSemesterRegistrationIntoDB,
    getAllSemesterRegistrationIntoDB,
    getSignalSemesterRegistrationIntoDB,
    updateSemesterRegistrationIntoDB,
};
