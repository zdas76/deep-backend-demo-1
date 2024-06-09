import { TAcademicSemester } from "../academicSemester/academic.interface";
import { User } from "./user.model";

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: "student",
    },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payLoad: TAcademicSemester) => {
  let currentId = (0).toString();
  const lastStudentId = await findLastStudentId();
  const lastYear = lastStudentId?.substring(0, 4);
  const lastSemesterCode = lastStudentId?.substring(4, 6);

  const currentYear = payLoad.year;
  const currentSemesterCode = payLoad.code;

  if (
    lastStudentId &&
    lastSemesterCode === currentSemesterCode &&
    lastYear == currentYear
  ) {
    currentId = lastStudentId.substring(6);
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
  incrementId = `${payLoad.year}${payLoad.code}${incrementId}`;
  return incrementId;
};
