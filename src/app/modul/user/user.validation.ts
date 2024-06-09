import { z } from "zod";

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: "Password must be string",
    })
    .min(6, { message: "Password required minimum 6 characterss" }),
});

export const userValidation = {
  userValidationSchema,
};
