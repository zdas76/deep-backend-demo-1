import express from "express";
import validationRequest from "../../middlwares/validateRequest";
import { SemseterRegistrationValidaton } from "./semesterRegistration.validation";
import { SemesterRegistrationController } from "./semesterRegistration.controller";

const router = express.Router();

router.post(
  "/create-semester-registration",
  validationRequest(
    SemseterRegistrationValidaton.createSemesterRegistrationValidationSchema
  ),
  SemesterRegistrationController.createSemesterRegistration
);

router.get(
  "/:id",
  SemesterRegistrationController.getSignalSemesterRegistration
);

router.patch(
  "/:id",
  validationRequest(
    SemseterRegistrationValidaton.updateSemesterRegistrationValidationSchema
  ),
  SemesterRegistrationController.updateSemesterRegistration
);

router.get("/", SemesterRegistrationController.getAllSemesterRegistration);

export const SemesterRegistrationRoutes = router;
