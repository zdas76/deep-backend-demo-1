import express from "express";
import { UserRouter } from "../modul/user/user.router";
import { AcademicSemesterRouter } from "../modul/academicSemester/academic.routes";
import { StudentRoutes } from "../modul/student/student.router";
import { AcademicFacultyRouter } from "../modul/academicFaculty/academicFaculty.routs";
import { DepartmentRouter } from "../modul/academicDepartment/department.routs";
import { CourseRoutes } from "../modul/course/course.route";
import { SemesterRegistrationRoutes } from "../modul/semesterRegistration/semesterRegistration.route";
import { OfferedCourseRouters } from "../modul/OfferedCourse/OfferedCourse.route";

const router = express.Router();

const modulRoutes = [
  { path: "/users/", route: UserRouter },
  { path: "/students/", route: StudentRoutes },

  { path: "/academic-semesters/", route: AcademicSemesterRouter },
  { path: "/academic-faculty/", route: AcademicFacultyRouter },
  { path: "/academic-department/", route: DepartmentRouter },
  { path: "/courses/", route: CourseRoutes },
  { path: "/semesters/", route: SemesterRegistrationRoutes },
  { path: "/offered-coursed/", route: OfferedCourseRouters },
];

modulRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
