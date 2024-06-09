"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRouter = void 0;
const express_1 = __importDefault(require("express"));
const academic_controllers_1 = require("./academic.controllers");
const validateRequest_1 = __importDefault(require("../../middlwares/validateRequest"));
const academic_validation_1 = require("./academic.validation");
const router = express_1.default.Router();
router.post("/create-academic-semester", (0, validateRequest_1.default)(academic_validation_1.AcademicSemesterValidations.createAcademicSemesterValidationSchema), academic_controllers_1.AcademicSemesterController.createAcademicSemester);
router.get("/:semesterId");
router.get("/");
router.patch("/:semesterId", (0, validateRequest_1.default)(academic_validation_1.AcademicSemesterValidations.updateAcademicSemesterValidationSchema), academic_controllers_1.AcademicSemesterController.getSemesterByIdAndUpdate);
router.get("/:id", academic_controllers_1.AcademicSemesterController.getSemesterById);
router.get("/", academic_controllers_1.AcademicSemesterController.getAllSemesters);
exports.AcademicSemesterRouter = router;
