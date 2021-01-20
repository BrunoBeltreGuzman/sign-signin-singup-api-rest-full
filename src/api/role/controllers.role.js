const modelRole = require("./model.role");

class ControllerRole {
       constructor() {}

       /*
              Insert Role
       */
       async insert(request, response) {
              const role = request.body.role;

              if (typeof role !== "undefined" && role !== "") {
                     try {
                            const result = await modelRole.insert(role);
                            response.json(result);
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

       /*
              Update Role
       */
       async update(request, response) {
              const role = request.body.role;
              const id = request.params.id;

              if (
                     typeof role !== "undefined" ||
                     role !== "" ||
                     typeof id !== "undefined" ||
                     id !== ""
              ) {
                     try {
                            const result = await modelRole.update(id, role);
                            response.json(result);
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

       /*
              Delete Role
       */
       async delete(request, response) {
              const id = request.params.id;

              if (typeof id !== "undefined" || id !== "") {
                     try {
                            const result = await modelRole.insert(id);
                            response.json(result);
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

       /*
              FindAll Role
       */
       async findAll(request, response) {
              try {
                     const result = await modelRole.findAll();
                     response.json(result);
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

       /*
              FindById Role
       */
       async findById(request, response) {
              const id = request.params.id;

              if (typeof id !== "undefined" || id !== "") {
                     try {
                            const result = await modelRole.findById(id);
                            response.json(result);
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

module.exports = new ControllerRole();
