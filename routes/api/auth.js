const express = require("express");

const ctrl = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../midlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.signUpSchema), ctrl.register);

// login// signin
router.post("/login", validateBody(schemas.logInSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;