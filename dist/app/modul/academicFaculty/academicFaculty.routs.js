"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlwares/validateRequest"));
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const academicFaculty_controllers_1 = require("./academicFaculty.controllers");
const router = express_1.default.Router();
router.post("/create-academic-faculty", (0, validateRequest_1.default)(academicFaculty_validation_1.FacultryValidation.academicFacultryalidationZod), academicFaculty_controllers_1.FacultyController.createAcademicFaculty);
router.get("/:facultyId", academicFaculty_controllers_1.FacultyController.getFacultyById);
router.get("/", academicFaculty_controllers_1.FacultyController.getAllFaculty);
router.patch("/:facultyId", (0, validateRequest_1.default)(academicFaculty_validation_1.FacultryValidation.academicFacultryalidationZod), academicFaculty_controllers_1.FacultyController.updateFacultyById);
exports.AcademicFacultyRouter = router;
