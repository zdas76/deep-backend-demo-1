import express from "express";

import { AcademicSemesterController } from "./academic.controllers";
import validationRequest from "../../middlwares/validateRequest";
import { AcademicSemesterValidations } from "./academic.validation";
const router = express.Router();

router.post(
  "/create-academic-semester",
  validationRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.createAcademicSemester
);

router.get("/:semesterId");
router.get("/");
router.patch(
  "/:semesterId",
  validationRequest(
    AcademicSemesterValidations.updateAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.getSemesterByIdAndUpdate
);

router.get("/:id", AcademicSemesterController.getSemesterById);
router.get("/", AcademicSemesterController.getAllSemesters);

export const AcademicSemesterRouter = router;
