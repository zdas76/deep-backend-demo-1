import express from "express";
import validationRequest from "../../middlwares/validateRequest";
import { FacultryValidation } from "./academicFaculty.validation";
import { FacultyController } from "./academicFaculty.controllers";
import { AcademicFaculty } from "./academicFaculty.model";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validationRequest(FacultryValidation.academicFacultryalidationZod),
  FacultyController.createAcademicFaculty
);

router.get("/:facultyId", FacultyController.getFacultyById);

router.get("/", FacultyController.getAllFaculty);

router.patch(
  "/:facultyId",
  validationRequest(FacultryValidation.academicFacultryalidationZod),
  FacultyController.updateFacultyById
);

export const AcademicFacultyRouter = router;
