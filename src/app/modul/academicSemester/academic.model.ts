import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academic.interface";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Month,
} from "./academicSemesterConstent";

const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: { type: String, required: true, enum: AcademicSemesterName },
    code: { type: String, required: true, enum: AcademicSemesterCode },
    year: { type: String },
    startMonth: { type: String, required: true, enum: Month },
    endMonth: { type: String, required: true, enum: Month },
  },
  {
    timestamps: true,
  }
);

AcademicSemesterSchema.pre("save", async function (next) {
  const isSemesterExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExists) {
    throw new Error("Semester already exists");
  }
  next();
});
export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  AcademicSemesterSchema
);
