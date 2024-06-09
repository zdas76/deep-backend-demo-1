import mongoose from "mongoose";
import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academic.interface";
import { AcademicSemester } from "../academicSemester/academic.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createStudentIntoDB = async (passwrod: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};
  userData.password = passwrod || (config.default_pass as string);

  userData.role = "student";

  const admissionSemester = await AcademicSemester.findById(
    studentData.admissionSemester
  );

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    if (admissionSemester) {
      userData.id = await generateStudentId(admissionSemester);
    }
    //   set manually generat id

    const newUser = await User.create([userData], { session });

    if (!newUser) {
      throw new AppError(httpStatus.BAD_REQUEST, "Faild to create user");
    }

    studentData.id = newUser[0].id;
    studentData.user = newUser[0]._id;

    const newStudent = await Student.create([studentData], { session });

    if (!newStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create student");
    }
    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, "Failed to create");
  }
};

export const UserServices = {
  createStudentIntoDB,
};
