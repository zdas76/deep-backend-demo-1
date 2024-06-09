import { z } from "zod";

const createDepertmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academit Department Name must be string",
      required_error: "Department name is required",
    }),
    academicFaculty: z.string({
      invalid_type_error: "Academic faculty must be string",
      required_error: " Faculty is required",
    }),
  }),
});

const updateDepertmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Academit Department Name must be string",
        required_error: "Department name is required",
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: "Academic faculty must be string",
        required_error: " Faculty is required",
      })
      .optional(),
  }),
});

export const DapertmentValidationZod = {
  createDepertmentValidationSchema,
  updateDepertmentValidationSchema,
};
