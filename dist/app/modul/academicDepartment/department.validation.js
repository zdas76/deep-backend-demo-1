"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DapertmentValidationZod = void 0;
const zod_1 = require("zod");
const createDepertmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: "Academit Department Name must be string",
            required_error: "Department name is required",
        }),
        academicFaculty: zod_1.z.string({
            invalid_type_error: "Academic faculty must be string",
            required_error: " Faculty is required",
        }),
    }),
});
const updateDepertmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            invalid_type_error: "Academit Department Name must be string",
            required_error: "Department name is required",
        })
            .optional(),
        academicFaculty: zod_1.z
            .string({
            invalid_type_error: "Academic faculty must be string",
            required_error: " Faculty is required",
        })
            .optional(),
    }),
});
exports.DapertmentValidationZod = {
    createDepertmentValidationSchema,
    updateDepertmentValidationSchema,
};
