import express, { NextFunction, Request, Response } from "express";
import { userController } from "./user.controler";
import { createStudentValidationSchema } from "../student/student.validation";
import validationRequest from "../../middlwares/validateRequest";

const router = express.Router();

router.post(
  "/create-student",
  validationRequest(createStudentValidationSchema),
  userController.createStudent
);
router.get("/");
router.get("/:userId");
router.delete("/");

export const UserRouter = router;
