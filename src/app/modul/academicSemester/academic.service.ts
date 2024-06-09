import { TAcademicSemester } from "./academic.interface";
import { AcademicSemester } from "./academic.model";
import { academicSemerterNameCodeMapper } from "./academicSemesterConstent";

const createAcademicSemesterIntoDB = async (payLoad: TAcademicSemester) => {
  if (academicSemerterNameCodeMapper[payLoad.name] !== payLoad.code) {
    throw new Error("Invalid Semester Code");
  }
  const result = await AcademicSemester.create(payLoad);
  return result;
};

const getAllSemestersfromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSemesterByIdfromDB = async (id: string) => {
  const result = await AcademicSemester.findById({ _id: id });
  return result;
};

const getSemesterByIdAndUpdatetoDB = async (payLoad: TAcademicSemester) => {
  console.log(payLoad);
  const result = await AcademicSemester.updateOne();

  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllSemestersfromDB,
  getSemesterByIdfromDB,
  getSemesterByIdAndUpdatetoDB,
};
