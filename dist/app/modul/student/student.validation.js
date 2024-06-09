"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidations = exports.updatedStudentValidationSchema = exports.createStudentValidationSchema = void 0;
const zod_1 = require("zod");
const userNameSchema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .min(1)
        .max(20)
        .refine((value) => /^[A-Z]/.test(value), {
        message: "First Name must start with a capital letter",
    }),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string(),
});
const guardianSchema = zod_1.z.object({
    fatherName: zod_1.z.string(),
    fatherOccupation: zod_1.z.string(),
    fatherContactNo: zod_1.z.string(),
    motherName: zod_1.z.string(),
    motherOccupation: zod_1.z.string(),
    motherContactNo: zod_1.z.string(),
});
const localGuardianSchema = zod_1.z.object({
    name: zod_1.z.string(),
    occupation: zod_1.z.string(),
    contactNo: zod_1.z.string(),
    address: zod_1.z.string(),
});
exports.createStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().max(20),
        student: zod_1.z.object({
            name: userNameSchema,
            gender: zod_1.z.enum(["male", "female", "other"]),
            dateOfBirth: zod_1.z.string().optional(),
            email: zod_1.z.string().email(),
            contactNo: zod_1.z.string(),
            emergencyContactNo: zod_1.z.string(),
            bloogGroup: zod_1.z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
            presentAddress: zod_1.z.string(),
            permanentAddress: zod_1.z.string(),
            guardian: guardianSchema,
            localGuardian: localGuardianSchema,
            profileImg: zod_1.z.string(),
            admissionSemester: zod_1.z.string(),
            academicDepartment: zod_1.z.string(),
        }),
    }),
});
const updateUserNameSchema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .min(1)
        .max(20)
        .refine((value) => /^[A-Z]/.test(value), {
        message: "First Name must start with a capital letter",
    })
        .optional(),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().optional(),
});
const UpdateGuardianSchema = zod_1.z.object({
    fatherName: zod_1.z.string().optional(),
    fatherOccupation: zod_1.z.string().optional(),
    fatherContactNo: zod_1.z.string().optional(),
    motherName: zod_1.z.string().optional(),
    motherOccupation: zod_1.z.string().optional(),
    motherContactNo: zod_1.z.string().optional(),
});
const updateLocalGuardianSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    occupation: zod_1.z.string().optional(),
    contactNo: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
});
exports.updatedStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().max(20).optional(),
        student: zod_1.z.object({
            name: updateUserNameSchema,
            gender: zod_1.z.enum(["male", "female", "other"]).optional(),
            dateOfBirth: zod_1.z.string().optional(),
            email: zod_1.z.string().email().optional(),
            contactNo: zod_1.z.string().optional(),
            emergencyContactNo: zod_1.z.string().optional(),
            bloogGroup: zod_1.z
                .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
                .optional(),
            presentAddress: zod_1.z.string().optional(),
            permanentAddress: zod_1.z.string().optional(),
            guardian: UpdateGuardianSchema,
            localGuardian: updateLocalGuardianSchema,
            profileImg: zod_1.z.string().optional(),
            admissionSemester: zod_1.z.string().optional(),
            academicDepartment: zod_1.z.string().optional(),
        }),
    }),
});
exports.studentValidations = {
    createStudentValidationSchema: exports.createStudentValidationSchema,
    updatedStudentValidationSchema: exports.updatedStudentValidationSchema,
};
