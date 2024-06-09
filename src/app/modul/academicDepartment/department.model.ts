import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./depertmetn.interfact";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const departmentSchema = new Schema<TAcademicDepartment>(
  {
    name: { type: String, required: true, unique: true },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
  },
  {
    timestamps: true,
  }
);

departmentSchema.pre("save", async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });

  if (isDepartmentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "This department is already exist!"
    );
  }
  next();
});

departmentSchema.pre("findOneAndUpdate", async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne(query);

  if (!isDepartmentExist) {
    throw new AppError(httpStatus.NOT_FOUND, "This department is not exist!");
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  "AcademicDepartment",
  departmentSchema
);
