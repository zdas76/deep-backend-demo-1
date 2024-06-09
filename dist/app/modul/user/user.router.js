"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controler_1 = require("./user.controler");
const student_validation_1 = require("../student/student.validation");
const validateRequest_1 = __importDefault(require("../../middlwares/validateRequest"));
const router = express_1.default.Router();
router.post("/create-student", (0, validateRequest_1.default)(student_validation_1.createStudentValidationSchema), user_controler_1.userController.createStudent);
router.get("/");
router.get("/:userId");
router.delete("/");
exports.UserRouter = router;
