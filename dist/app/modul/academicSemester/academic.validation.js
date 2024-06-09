"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterValidations = void 0;
const zod_1 = require("zod");
const academicSemesterConstent_1 = require("./academicSemesterConstent");
const createAcademicSemesterValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academicSemesterConstent_1.AcademicSemesterName]),
        code: zod_1.z.enum([...academicSemesterConstent_1.AcademicSemesterCode]),
        year: zod_1.z.string(),
        startMonth: zod_1.z.enum([...academicSemesterConstent_1.Month]),
        endMonth: zod_1.z.enum([...academicSemesterConstent_1.Month]),
    }),
});
const updateAcademicSemesterValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academicSemesterConstent_1.AcademicSemesterName]).optional(),
        code: zod_1.z.enum([...academicSemesterConstent_1.AcademicSemesterCode]).optional(),
        year: zod_1.z.string().optional(),
        startMonth: zod_1.z.enum([...academicSemesterConstent_1.Month]).optional(),
        endMonth: zod_1.z.enum([...academicSemesterConstent_1.Month]).optional(),
    }),
});
exports.AcademicSemesterValidations = {
    createAcademicSemesterValidationSchema,
    updateAcademicSemesterValidationSchema,
};
