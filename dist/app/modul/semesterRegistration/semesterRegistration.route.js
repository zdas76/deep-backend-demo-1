"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRegistrationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlwares/validateRequest"));
const semesterRegistration_validation_1 = require("./semesterRegistration.validation");
const semesterRegistration_controller_1 = require("./semesterRegistration.controller");
const router = express_1.default.Router();
router.post("/create-semester-registration", (0, validateRequest_1.default)(semesterRegistration_validation_1.SemseterRegistrationValidaton.createSemesterRegistrationValidationSchema), semesterRegistration_controller_1.SemesterRegistrationController.createSemesterRegistration);
router.get("/:id", semesterRegistration_controller_1.SemesterRegistrationController.getSignalSemesterRegistration);
router.patch("/:id", (0, validateRequest_1.default)(semesterRegistration_validation_1.SemseterRegistrationValidaton.updateSemesterRegistrationValidationSchema), semesterRegistration_controller_1.SemesterRegistrationController.updateSemesterRegistration);
router.get("/", semesterRegistration_controller_1.SemesterRegistrationController.getAllSemesterRegistration);
exports.SemesterRegistrationRoutes = router;
