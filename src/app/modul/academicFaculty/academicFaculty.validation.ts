import { z } from "zod";

const academicFacultryalidationZod = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Faculty must be string",
    }),
  }),
});

export const FacultryValidation = {
  academicFacultryalidationZod,
};
