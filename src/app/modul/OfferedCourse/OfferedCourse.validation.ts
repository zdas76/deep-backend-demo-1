import { z } from "zod";
import { Days } from "./OfferedCourse.constants";

const createOfferedCourseValidationSchema = z.object({
  body: z
    .object({
      semesterRegistration: z.string(),
      academicFaculty: z.string(),
      academicDepartment: z.string(),
      course: z.string(),
      faculty: z.string(),
      section: z.number(),
      maxCapacity: z.number(),
      days: z.array(z.enum([...Days] as [string, ...string[]])),
      startTime: z.string().refine(
        (time) => {
          const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
          return regex.test(time);
        },
        {
          message: "Invalid time formate, expected 'HH:MM' in 24 houres",
        }
      ),
      endTime: z.string().refine(
        (time) => {
          const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
          return regex.test(time);
        },
        {
          message: "Invalid time formate, expected 'HH:MM' in 24 houres",
        }
      ),
    })
    .refine(
      (body) => {
        const start = new Date(`2000-01-01T${body.startTime}`);
        const end = new Date(`2000-01-01T${body.endTime}`);
        return end > start;
      },
      {
        message: "Start time should be before End time !",
      }
    ),
});

const updateOfferedCourseValidationSchema = z.object({
  body: z.object({
    faculty: z.string().optional(),
    maxCapacity: z.number().optional(),
    days: z.array(z.enum([...Days] as [string, ...string[]])).optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
});

export const OfferedCourseValidation = {
  createOfferedCourseValidationSchema,
  updateOfferedCourseValidationSchema,
};
