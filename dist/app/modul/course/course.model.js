"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseFaculty = exports.Course = void 0;
const mongoose_1 = require("mongoose");
const preRequisiteCourses = new mongoose_1.Schema({
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: "Course" },
});
const courseSchema = new mongoose_1.Schema({
    title: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    prefix: { type: String, trim: true, required: true },
    code: { type: Number, trim: true },
    credits: { type: Number, trim: true, required: true },
    preRequisiteCourses: [preRequisiteCourses],
    isDeleted: { type: Boolean, default: false },
});
exports.Course = (0, mongoose_1.model)("Course", courseSchema);
const courseFacultySchema = new mongoose_1.Schema({
    course: { type: mongoose_1.Schema.Types.ObjectId, ref: "Course", unique: true },
    faculties: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Faculty" }],
});
exports.CourseFaculty = (0, mongoose_1.model)("CourseFaculty", courseFacultySchema);
