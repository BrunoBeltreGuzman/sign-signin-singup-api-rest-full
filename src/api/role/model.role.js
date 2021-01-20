const poolMysql = require("../../lib/database/connection.mysql");

class ModelRole {
       constructor() {}

       async insert(role) {
              const result = await poolMysql.query({
                     sql: "INSERT INTO roles (role) VALUES (?)",
                     values: [role],
              });
              return result;
       }

       /*
              Update Role
       */
       async update(id, role) {
              const result = await poolMysql.query({
                     sql: "UPDATE  roles SET role = ? WHERE id = ?",
                     values: [role, id],
              });
              return result;
       }

       /*
              Delete Role
       */
       async delete(id, response) {
              const result = await poolMysql.query({
                     sql: "DELETE FROM roles WHERE id = ?",
                     values: [id],
              });
              return result;
       }

       /*
              FindAll Role
       */
       async findAll(response) {
              const roles = await poolMysql.query({
                     sql: "SELECT * FROM roles",
              });
              return roles;
       }

       /*
              FindById Role
       */
       async findById(id, response) {
              const role = await poolMysql.query({
                     sql: "SELECT * FROM roles WHERE id = ?",
                     values: [id],
              });
              return role;
       }
}

module.exports = new ModelRole();
