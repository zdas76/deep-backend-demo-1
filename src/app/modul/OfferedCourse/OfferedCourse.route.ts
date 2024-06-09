import express from "express";
import validationRequest from "../../middlwares/validateRequest";
import { OfferedCourseValidation } from "./OfferedCourse.validation";
import { OfferedCourseController } from "./OfferedCourse.controller";

const route = express.Router();

route.post(
  "/create-offered-course",
  validationRequest(
    OfferedCourseValidation.createOfferedCourseValidationSchema
  ),
  OfferedCourseController.crateOfferedCourse
);

export const OfferedCourseRouters = route;
