"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_router_1 = require("../modul/user/user.router");
const academic_routes_1 = require("../modul/academicSemester/academic.routes");
const student_router_1 = require("../modul/student/student.router");
const academicFaculty_routs_1 = require("../modul/academicFaculty/academicFaculty.routs");
const department_routs_1 = require("../modul/academicDepartment/department.routs");
const course_route_1 = require("../modul/course/course.route");
const semesterRegistration_route_1 = require("../modul/semesterRegistration/semesterRegistration.route");
const OfferedCourse_route_1 = require("../modul/OfferedCourse/OfferedCourse.route");
const router = express_1.default.Router();
const modulRoutes = [
    { path: "/users/", route: user_router_1.UserRouter },
    { path: "/students/", route: student_router_1.StudentRoutes },
    { path: "/academic-semesters/", route: academic_routes_1.AcademicSemesterRouter },
    { path: "/academic-faculty/", route: academicFaculty_routs_1.AcademicFacultyRouter },
    { path: "/academic-department/", route: department_routs_1.DepartmentRouter },
    { path: "/courses/", route: course_route_1.CourseRoutes },
    { path: "/semesters/", route: semesterRegistration_route_1.SemesterRegistrationRoutes },
    { path: "/offered-coursed/", route: OfferedCourse_route_1.OfferedCourseRouters },
];
modulRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
