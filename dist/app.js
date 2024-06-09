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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const globalErrorhandler_1 = __importDefault(require("./app/middlwares/globalErrorhandler"));
const notFound_1 = __importDefault(require("./app/middlwares/notFound"));
const Routes_1 = __importDefault(require("./app/Routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1/", Routes_1.default);
//   app.use("/api/v1/user", Student.Routes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Hello World!");
}));
app.use(globalErrorhandler_1.default);
// Not Found
app.use(notFound_1.default);
exports.default = app;
