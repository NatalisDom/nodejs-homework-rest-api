const express = require("express");

const router = express.Router();
const { volidateBody, authenticate } = require("../../minddlewares");
const { registerSchema, loginSchema } = require("../../schemas");
const ctrl = require("../../controllers/users/index");

router.post("/register");
router.post("/register", volidateBody(registerSchema), ctrl.register);
router.post("/login", volidateBody(loginSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;