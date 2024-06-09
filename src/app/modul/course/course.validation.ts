import { Schema, object, z } from "zod";

const PrerequisiteCourseSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    preRequisiteCourses: z.array(PrerequisiteCourseSchema).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

const UpdatePrerequisiteCourseSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});
const updateCourseValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credits: z.number().optional(),
    preRequisiteCourses: z.array(UpdatePrerequisiteCourseSchema).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

const CourseFacultyValidationSchema = z.object({
  body: z.object({
    faculties: z.array(z.string()),
  }),
});

export const CourseValidations = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
  CourseFacultyValidationSchema,
};
