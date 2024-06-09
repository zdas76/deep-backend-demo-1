import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ZodError, ZodIssue } from "zod";
import { TErrorSources } from "../interface/error";
import config from "../config";
import handelZodError from "../errors/handleZodError";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";
import handleDuplicateError from "../errors/handleDuplicateError";
import AppError from "../errors/AppError";

const globalErrorHandaler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went worng",
    },
  ];

  if (error instanceof ZodError) {
    const simplifedError = handelZodError(error);
    statusCode = simplifedError?.statusCode;
    message = simplifedError?.message;
    errorSources = simplifedError?.errorSources;
  } else if (error?.name === "ValidationError") {
    const simplifedError = handleValidationError(error);
    statusCode = simplifedError?.statusCode;
    message = simplifedError?.message;
    errorSources = simplifedError?.errorSources;
  } else if (error?.name === "CastError") {
    const simplifedError = handleCastError(error);
    statusCode = simplifedError?.statusCode;
    message = simplifedError?.message;
    errorSources = simplifedError?.errorSources;
  } else if (error.code === 11000) {
    const simplifedError = handleDuplicateError(error);
    statusCode = simplifedError?.statusCode;
    message = simplifedError?.message;
    errorSources = simplifedError?.errorSources;
  } else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorSources = [
      {
        path: "",
        message: error.message,
      },
    ];
  } else if (error instanceof Error) {
    message = error?.message;
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
    stack: config.NODE_ENV === "development" ? error?.stack : null,
  });
};

export default globalErrorHandaler;
