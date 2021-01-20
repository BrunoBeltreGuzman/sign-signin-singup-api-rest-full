const express = require("express");
const controllerRole = require("./controllers.role");

const router = express.Router();

const jsonWebToken = require("../../lib/jwt/jwt.js");
const verifyRole = require("../../lib/jwt/verify.role");

router.post(
       "/",
       [jsonWebToken.verifyToken, verifyRole.isAdmin],
       controllerRole.insert
);

router.put(
       "/:id",
       [jsonWebToken.verifyToken, verifyRole.isAdmin],
       controllerRole.update
);

router.delete(
       "/:id",
       [jsonWebToken.verifyToken, verifyRole.isAdmin],
       controllerRole.delete
);

router.get(
       "/",
       [jsonWebToken.verifyToken, verifyRole.isAdmin],
       controllerRole.findAll
);

router.get(
       "/:id",
       [jsonWebToken.verifyToken, verifyRole.isAdmin],
       controllerRole.findById
);

module.exports = router;
