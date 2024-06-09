import { z } from "zod";
import { Days } from "./OfferedCourse.constants";

const createOfferedCourseValidationSchema = z.object({
  body: z.object({
    semesterrEgistration: z.string(),
    academicSemester: z.string(),
    academicFaculty: z.string(),
    academicDepartment: z.string(),
    course: z.string(),
    faculty: z.string(),
    section: z.number(),
    maxCapacity: z.number(),
    days: z.enum([...Days] as [string, ...string[]]),
    startTime: z.string(),
    endTime: z.string(),
  }),
});

const updateOfferedCourseValidationSchema = z.object({
  body: z.object({
    faculty: z.string().optional(),
    maxCapacity: z.number().optional(),
    days: z.enum([...Days] as [string, ...string[]]).optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
});

export const OfferedCourseValidation = {
  createOfferedCourseValidationSchema,
  updateOfferedCourseValidationSchema,
};