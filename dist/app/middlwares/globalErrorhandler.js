"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config"));
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const handleValidationError_1 = __importDefault(require("../errors/handleValidationError"));
const handleCastError_1 = __importDefault(require("../errors/handleCastError"));
const handleDuplicateError_1 = __importDefault(require("../errors/handleDuplicateError"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const globalErrorHandaler = (error, req, res, next) => {
    let statusCode = 500;
    let message = "Something went wrong!";
    let errorSources = [
        {
            path: "",
            message: "Something went worng",
        },
    ];
    if (error instanceof zod_1.ZodError) {
        const simplifedError = (0, handleZodError_1.default)(error);
        statusCode = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.statusCode;
        message = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.message;
        errorSources = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.errorSources;
    }
    else if ((error === null || error === void 0 ? void 0 : error.name) === "ValidationError") {
        const simplifedError = (0, handleValidationError_1.default)(error);
        statusCode = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.statusCode;
        message = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.message;
        errorSources = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.errorSources;
    }
    else if ((error === null || error === void 0 ? void 0 : error.name) === "CastError") {
        const simplifedError = (0, handleCastError_1.default)(error);
        statusCode = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.statusCode;
        message = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.message;
        errorSources = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.errorSources;
    }
    else if (error.code === 11000) {
        const simplifedError = (0, handleDuplicateError_1.default)(error);
        statusCode = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.statusCode;
        message = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.message;
        errorSources = simplifedError === null || simplifedError === void 0 ? void 0 : simplifedError.errorSources;
    }
    else if (error instanceof AppError_1.default) {
        statusCode = error === null || error === void 0 ? void 0 : error.statusCode;
        message = error === null || error === void 0 ? void 0 : error.message;
        errorSources = [
            {
                path: "",
                message: error.message,
            },
        ];
    }
    else if (error instanceof Error) {
        message = error === null || error === void 0 ? void 0 : error.message;
        errorSources = [
            {
                path: "",
                message: error.message,
            },
        ];
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: config_1.default.NODE_ENV === "development" ? error === null || error === void 0 ? void 0 : error.stack : null,
    });
};
exports.default = globalErrorHandaler;
