import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";

const crateAcademicFacultytoDB = async (payLoad: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payLoad);
  return result;
};

const getAllFacultyFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getFacultyByIDfromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateFacultyIntoDB = async (
  facultyId: string,
  payLoad: TAcademicFaculty
) => {
  const result = await AcademicFaculty.findOneAndUpdate(
    {
      _id: facultyId,
    },
    payLoad,
    { new: true }
  );
  return result;
};

export const FacultyService = {
  crateAcademicFacultytoDB,
  getAllFacultyFromDB,
  getFacultyByIDfromDB,
  updateFacultyIntoDB,
};
