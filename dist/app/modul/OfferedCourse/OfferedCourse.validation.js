"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseValidation = void 0;
const zod_1 = require("zod");
const OfferedCourse_constants_1 = require("./OfferedCourse.constants");
const createOfferedCourseValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        semesterrEgistration: zod_1.z.string(),
        academicSemester: zod_1.z.string(),
        academicFaculty: zod_1.z.string(),
        academicDepartment: zod_1.z.string(),
        course: zod_1.z.string(),
        faculty: zod_1.z.string(),
        section: zod_1.z.number(),
        maxCapacity: zod_1.z.number(),
        days: zod_1.z.enum([...OfferedCourse_constants_1.Days]),
        startTime: zod_1.z.string(),
        endTime: zod_1.z.string(),
    }),
});
const updateOfferedCourseValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        faculty: zod_1.z.string().optional(),
        maxCapacity: zod_1.z.number().optional(),
        days: zod_1.z.enum([...OfferedCourse_constants_1.Days]).optional(),
        startTime: zod_1.z.string().optional(),
        endTime: zod_1.z.string().optional(),
    }),
});
exports.OfferedCourseValidation = {
    createOfferedCourseValidationSchema,
    updateOfferedCourseValidationSchema,
};
