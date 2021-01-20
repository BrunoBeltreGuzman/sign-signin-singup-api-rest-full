const modelUsers = require("./model.users");

class ControllerUsers {
       constructor() {}

       async findAll(request, response) {
              try {
                     const result = await modelUsers.findAll();
                     response.send(result);
              } catch (error) {
                     response.status(500).json({
                            message: "Error Internal in the server",
                            error: { error },
                     });
                     throw error;
              }
       }

       async findById(request, response) {
              const id = request.params.id;

              if (typeof id !== "undefined" && id !== "") {
                     try {
                            const result = await modelUsers.findById(id);
                            response.send(result);
                     } catch (error) {
                            response.status(500).json({
                                   message: "Error Internal in the server",
                                   error: { error },
                            });
                            throw error;
                     }
              } else {
                     response.status(400).json({
                            message: "Inputs incomplete, All input required",
                     });
              }
       }

       async insert(request, response) {
              const name = request.body.name;
              const email = request.body.email;
              let password = request.body.password;

              if (
                     typeof name !== "undefined" ||
                     name !== "" ||
                     typeof email !== "undefined" ||
                     email !== "" ||
                     typeof password !== "undefined" ||
                     password !== ""
              ) {
                     try {
                            //bcrypt password
                            password = await bcrypt.encryptPassword(password);

                            const result = await modelUsers.insert(
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
                            });
                            throw error;
                     }
              } else {
                     response.status(400).json({
                            message: "Inputs incomplete, All input required",
                     });
              }
       }

       async update(request, response) {
              const name = request.body.name;
              const email = request.body.email;
              const id = request.params.id;
              let password = request.body.password;

              if (
                     typeof name !== "undefined" ||
                     name !== "" ||
                     typeof email !== "undefined" ||
                     email !== "" ||
                     typeof password !== "undefined" ||
                     password !== "" ||
                     typeof id !== "undefined" ||
                     id !== ""
              ) {
                     try {
                            //bcrypt password
                            password = await bcrypt.encryptPassword(password);
                            const result = await modelUsers.update(
                                   id,
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
                            });
                            throw error;
                     }
              } else {
                     response.status(400).json({
                            message: "Inputs incomplete, All input required",
                     });
              }
       }

       async delete(request, response) {
              const id = request.params.id;

              if (typeof id !== "undefined" || id !== "") {
                     try {
                            const result = await modelUsers.delete(id);
                            response.send(result);
                     } catch (error) {
                            response.status(500).json({
                                   message: "Error Internal in the server",
                                   error: {
                                          error,
                                   },
                            });
                            throw error;
                     }
              } else {
                     response.status(400).json({
                            message: "Inputs incomplete, All input required",
                     });
              }
       }
}

module.exports = new ControllerUsers();
