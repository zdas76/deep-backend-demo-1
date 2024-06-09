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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterServices = void 0;
const academic_model_1 = require("./academic.model");
const academicSemesterConstent_1 = require("./academicSemesterConstent");
const createAcademicSemesterIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    if (academicSemesterConstent_1.academicSemerterNameCodeMapper[payLoad.name] !== payLoad.code) {
        throw new Error("Invalid Semester Code");
    }
    const result = yield academic_model_1.AcademicSemester.create(payLoad);
    return result;
});
const getAllSemestersfromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_model_1.AcademicSemester.find();
    return result;
});
const getSemesterByIdfromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_model_1.AcademicSemester.findById({ _id: id });
    return result;
});
const getSemesterByIdAndUpdatetoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payLoad);
    const result = yield academic_model_1.AcademicSemester.updateOne();
    return result;
});
exports.AcademicSemesterServices = {
    createAcademicSemesterIntoDB,
    getAllSemestersfromDB,
    getSemesterByIdfromDB,
    getSemesterByIdAndUpdatetoDB,
};
