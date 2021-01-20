const modelSign = require("./model.sign");
const modelRole = require("../role/model.role");

const bcrypt = require("../../lib/bcrypt/bcrypt");
const jsonwebtoken = require("../../lib/jwt/jwt");

class ControllerSing {
       constructor() {}

       /*
              Signin
       */
       async signin(request, response) {
              const name = request.body.name;
              const password = request.body.password;

              if (typeof name !== "undefined" && name !== "") {
                     if (typeof password !== "undefined" && password !== "") {
                            try {
                                   const result = await modelSign.signin(name);
                                   if (result[0]) {
                                          const validPassword = await bcrypt.matchPassword(
                                                 password,
                                                 result[0].password
                                          );
                                          if (validPassword) {
                                                 const role = await modelRole.findById(
                                                        result[0].role
                                                 );
                                                 const token = await jsonwebtoken.signJwt(
                                                        {
                                                               user: result[0],
                                                               role: role,
                                                        }
                                                 );
                                                 response.status(400).json({
                                                        user: result[0],
                                                        role: role,
                                                        token: token,
                                                        message:
                                                               "Signin Success",
                                                 });
                                          } else {
                                                 response.status(400).json({
                                                        message:
                                                               "Incorrect Password",
                                                 });
                                          }
                                   } else {
                                          response.status(400).json({
                                                 message:
                                                        "The Username does not exists.",
                                          });
                                   }
                            } catch (error) {
                                   response.status(500).json({
                                          message:
                                                 "Error Internal in the server",
                                          error: {
                                                 error,
                                          },
                                   });
                                   throw error;
                            }
                     } else {
                            response.status(400).json({
                                   message: "Password required",
                            });
                     }
              } else {
                     response.status(400).json({ message: "User required" });
              }
       }

       /*
              Signup 
       */
       async signup(request, response) {
              const name = request.body.name;
              const email = request.body.email;
              let password = request.body.password;

              if (
                     typeof name !== "undefined" &&
                     name !== "" &&
                     typeof email !== "undefined" &&
                     email !== "" &&
                     typeof password !== "undefined" &&
                     password !== ""
              ) {
                     try {
                            //bcrypt password
                            password = await bcrypt.encryptPassword(
                                   request.body.password
                            );

                            const result = await modelSign.signup(
                                   name,
                                   email,
                                   password
                            );
                            response.send(result);
                     } catch (error) {
                            response.status(500).json({
                                   message: "Error Internal in the server",
                                   error: {
                                          error,
                                   },
                                   status: 500,
                            });
                            throw error;
                     }
              } else {
                     response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "name, email, password",
                            status: 400,
                     });
              }
       }
}

module.exports = new ControllerSing();
