const express = require("express");
const router = express.Router();

const verifyRole = require("../lib/jwt/verify.role");
const jsonWebToken = require("../lib/jwt/jwt");

const routerUsers = require("../api/users/router.users");
const routerRole = require("../api/role/router.role");
const routerSign = require("../api/sign/router.sign");

router.use("/users", routerUsers);

router.use("/role", routerRole);

router.use("/sign", routerSign);

router.get(
       "/home",
       [jsonWebToken.verifyToken, verifyRole.isUser],
       function (request, response) {
              response.send(
                     "Welcome " +
                            request.user.user.name +
                            ", you role is '" +
                            request.user.role[0].role +
                            "'"
              );
       }
);

module.exports = router;
