const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config.js");

class JsonWebToken {
       constructor() {}

       signJwt(user) {
              try {
                     const token = jwt.sign({ user }, config.secret);
                     return token;
              } catch (error) {
                     response.status(500).json({
                            message: "Error Internal in the server",
                            error: {
                                   error,
                            },
                     });
                     throw error;
              }
       }

       verifyToken(request, response, next) {
              const token = request.headers["authorization"];
              if (!token) {
                     return response.status(403).send({
                            message: "No token provided!",
                            status: 403,
                     });
              }
              try {
                     const decode = jwt.verify(token, config.secret);
                     request.user = decode.user;
                     next();
              } catch (error) {
                     response.status(500).json({
                            message: "Error Internal in the server",
                            error: {
                                   error,
                            },
                     });
                     throw error;
              }
       }
}

module.exports = new JsonWebToken();
