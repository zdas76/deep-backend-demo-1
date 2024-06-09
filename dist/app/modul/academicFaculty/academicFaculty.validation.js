"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultryValidation = void 0;
const zod_1 = require("zod");
const academicFacultryalidationZod = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: "Academic Faculty must be string",
        }),
    }),
});
exports.FacultryValidation = {
    academicFacultryalidationZod,
};
