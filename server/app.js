"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Routes_1 = __importDefault(require("./src/routes/Routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = 8080 || process.env.PORT;
const app = express();
app.use('/api/v1', Routes_1.default);
app.listen(port, () => {
    console.log(`[Forest ID Server]: Server is running at http://localhost:${port}`);
});
