"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    password: zod_1.z
        .string({
        invalid_type_error: "Password must be string",
    })
        .min(6, { message: "Password required minimum 6 characterss" }),
});
exports.userValidation = {
    userValidationSchema,
};
