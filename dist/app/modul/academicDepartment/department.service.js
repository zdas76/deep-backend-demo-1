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
exports.DepartmentService = void 0;
const department_model_1 = require("./department.model");
const crateAcademicDepartmenttoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield department_model_1.AcademicDepartment.create(payLoad);
    return result;
});
const getAllDepartmentyFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield department_model_1.AcademicDepartment.find().populate("academicFaculty");
    return result;
});
const getDepartmentByIDfromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield department_model_1.AcademicDepartment.findById(id).populate("academicFaculty");
    return result;
});
const updateDepartmentByIntoDB = (facultyId, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield department_model_1.AcademicDepartment.findOneAndUpdate({
        _id: facultyId,
    }, payLoad, { new: true });
    return result;
});
exports.DepartmentService = {
    crateAcademicDepartmenttoDB,
    getAllDepartmentyFromDB,
    getDepartmentByIDfromDB,
    updateDepartmentByIntoDB,
};
