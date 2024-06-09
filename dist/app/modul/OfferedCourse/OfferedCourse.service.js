"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCoursedService = void 0;
const OfferedCourse_model_1 = require("./OfferedCourse.model");
const createOfferedCoursedIntoDB = (PayLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield OfferedCourse_model_1.OfferedCourse.create(PayLoad);
    return result;
});
const getAllOfferedCoursedFromDB = (PayLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield OfferedCourse_model_1.OfferedCourse.find(PayLoad);
    return result;
});
exports.OfferedCoursedService = {
    createOfferedCoursedIntoDB,
    getAllOfferedCoursedFromDB,
};
