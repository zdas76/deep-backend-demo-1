import express from "express";
import validationRequest from "../../middlwares/validateRequest";
import { CourseValidations } from "./course.validation";
import { CourseControllers } from "./course.controller";

const router = express.Router();

router.post(
  "/create-course",
  validationRequest(CourseValidations.createCourseValidationSchema),
  CourseControllers.createCourse
);

router.patch(
  "/:id",
  validationRequest(CourseValidations.updateCourseValidationSchema),
  CourseControllers.updateCourse
);

router.get("/:id", CourseControllers.getSignelCourse);

router.delete("/:id", CourseControllers.deleteSignelCourse);

router.put(
  "/:courseId/assign-faculties",
  validationRequest(CourseValidations.CourseFacultyValidationSchema),
  CourseControllers.assignFacultiesWithCourse
);

router.delete(
  "/:courseId/remove-faculties",
  validationRequest(CourseValidations.CourseFacultyValidationSchema),
  CourseControllers.removeFacultiesWithCourse
);

router.get("/", CourseControllers.getAllCourses);

export const CourseRoutes = router;
