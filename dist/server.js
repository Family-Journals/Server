"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./src/middlewares/middleware");
require('dotenv').config();
const PORT = process.env.PORT;
const baseURL = process.env.BASE_URL;
const userRoutes = require('./src/routes/users.js');
const app = (0, express_1.default)();
app.use(express_1.default.json());
console.log(middleware_1.requireJsonContent);
app.use(`${baseURL}/users`, userRoutes);
// app.use(requireJsonContent())
app.listen(PORT, () => {
    console.log(`||||----Server started on port ${PORT}----||||`);
});
