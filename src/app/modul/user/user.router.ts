import express, { NextFunction, Request, Response } from "express";
import { userController } from "./user.controler";
import { createStudentValidationSchema } from "../student/student.validation";
import validationRequest from "../../middlwares/validateRequest";
import { createFacultyValidationSchema } from "../Faculty/faculty.validation";
import { createAdminValidationSchema } from "../Admin/admin.validation";

const router = express.Router();

router.post(
  "/create-student",
  validationRequest(createStudentValidationSchema),
  userController.createStudent
);
router.post(
  "/create-faculty",
  validationRequest(createFacultyValidationSchema),
  userController.createFaculty
);
router.post(
  "/create-admin",
  validationRequest(createAdminValidationSchema),
  userController.createAdmin
);
router.get("/");
router.get("/:userId");
router.delete("/");

export const UserRouter = router;
