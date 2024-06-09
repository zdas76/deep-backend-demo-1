"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentRouter = void 0;
const express_1 = __importDefault(require("express"));
const department_controllers_1 = require("./department.controllers");
const validateRequest_1 = __importDefault(require("../../middlwares/validateRequest"));
const department_validation_1 = require("./department.validation");
const router = express_1.default.Router();
router.post("/create-academic-department", (0, validateRequest_1.default)(department_validation_1.DapertmentValidationZod.createDepertmentValidationSchema), department_controllers_1.DepartmentController.createAcademicDepartment);
router.get("/:departmentId", department_controllers_1.DepartmentController.getDepartmentById);
router.get("/", department_controllers_1.DepartmentController.getAllDepartment);
router.patch("/:departmentId", department_controllers_1.DepartmentController.updateDepartmentById);
exports.DepartmentRouter = router;
