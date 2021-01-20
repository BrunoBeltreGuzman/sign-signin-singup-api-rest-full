const express = require("express");
const router = express.Router();

const controllerUsers = require("./controller.users");

const jsonWebToken = require("../../lib/jwt/jwt.js");
const verifyRole = require("../../lib/jwt/verify.role");

router.get(
       "/",
       [jsonWebToken.verifyToken, verifyRole.isAdmin],
       controllerUsers.findAll
);

router.get(
       "/:id",
       [jsonWebToken.verifyToken, verifyRole.isAdmin],
       controllerUsers.findById
);

router.post(
       "/",
       [jsonWebToken.verifyToken, verifyRole.isAdmin],
       controllerUsers.insert
);

router.put(
       "/:id",
       [jsonWebToken.verifyToken, verifyRole.isAdmin],
       controllerUsers.update
);

router.delete(
       "/:id",
       [jsonWebToken.verifyToken, verifyRole.isAdmin],
       controllerUsers.delete
);

module.exports = router;
