const express = require("express");
const controllers = require("./controllers.sign");

const jsonWebToken = require("../../lib/jwt/jwt.js");
const verifyRole = require("../../lib/jwt/verify.role");

const router = express.Router();

router.post("/signin", [verifyRole.all], controllers.signin);
router.post("/signup", [verifyRole.all], controllers.signup);

module.exports = router;
