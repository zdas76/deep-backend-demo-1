import { AcademicDepartment } from "./department.model";
import { TAcademicDepartment } from "./depertmetn.interfact";

const crateAcademicDepartmenttoDB = async (payLoad: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payLoad);
  return result;
};

const getAllDepartmentyFromDB = async () => {
  const result = await AcademicDepartment.find().populate("academicFaculty");
  return result;
};

const getDepartmentByIDfromDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id).populate(
    "academicFaculty"
  );

  return result;
};

const updateDepartmentByIntoDB = async (
  facultyId: string,
  payLoad: TAcademicDepartment
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    {
      _id: facultyId,
    },
    payLoad,
    { new: true }
  );
  return result;
};

export const DepartmentService = {
  crateAcademicDepartmenttoDB,
  getAllDepartmentyFromDB,
  getDepartmentByIDfromDB,
  updateDepartmentByIntoDB,
};
