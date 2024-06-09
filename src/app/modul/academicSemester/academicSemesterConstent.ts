import {
  TAcademicSemerterNameCodeMapper,
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonth,
} from "./academic.interface";

export const Month: TMonth[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const AcademicSemesterName: TAcademicSemesterName[] = [
  "Autumn",
  "Summar",
  "Fall",
];
export const AcademicSemesterCode: TAcademicSemesterCode[] = ["01", "02", "03"];

export const academicSemerterNameCodeMapper: TAcademicSemerterNameCodeMapper = {
  Autumn: "01",
  Summar: "02",
  Fall: "03",
};
