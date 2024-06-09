import express from "express";
import { StudentControllers } from "./student.controller";
import validationRequest from "../../middlwares/validateRequest";
import { studentValidations } from "./student.validation";

const router = express.Router();

router.get("/:studentId", StudentControllers.getSingleStudent);

router.patch(
  "/:studentId",
  validationRequest(studentValidations.updatedStudentValidationSchema),
  StudentControllers.updateStudent
);

router.delete("/:studentId", StudentControllers.deleteStudent);

router.get("/", StudentControllers.getAllStudents);

export const StudentRoutes = router;
