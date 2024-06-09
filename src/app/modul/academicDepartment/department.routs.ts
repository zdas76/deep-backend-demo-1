import express from "express";
import { DepartmentController } from "./department.controllers";
import validationRequest from "../../middlwares/validateRequest";
import { DapertmentValidationZod } from "./department.validation";

const router = express.Router();

router.post(
  "/create-academic-department",
  validationRequest(DapertmentValidationZod.createDepertmentValidationSchema),
  DepartmentController.createAcademicDepartment
);

router.get("/:departmentId", DepartmentController.getDepartmentById);

router.get("/", DepartmentController.getAllDepartment);

router.patch("/:departmentId", DepartmentController.updateDepartmentById);

export const DepartmentRouter = router;
