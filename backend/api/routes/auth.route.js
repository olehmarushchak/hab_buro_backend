const express = require("express");
const { catchError } = require("../utils/catchError");
const { authController } = require("../controller/auth.controller");

const authRouter = express.Router();

authRouter.post("/", catchError(authController.login));

module.exports = {
  authRouter,
};
