const poolMysql = require("../../lib/database/connection.mysql");

class ModelUsers {
       constructor() {}

       /*
              findAll Users
       */
       async findAll() {
              const users = await poolMysql.query({
                     sql: "SELECT * FROM users",
              });
              return users;
       }

       /*
              findById Users
       */
       async findById(id) {
              const user = await poolMysql.query({
                     sql: "SELECT * FROM users WHERE id = ?",
                     values: [id],
              });
              return user;
       }

       /*
              Insert Users
       */
       async insert(name, email, password) {
              const result = await poolMysql.query({
                     sql:
                            "INSERT INTO users (name, email, password) VALUES (?,?,?)",
                     values: [name, email, password],
              });
              return result;
       }

       /*
              Update Users
       */
       async update(id, name, email, password) {
              const result = await poolMysql.query({
                     sql:
                            "UPDATE  users SET name = ?, email = ?, password = ? WHERE id = ?",
                     values: [name, email, password, id],
              });
              return result;
       }

       async delete(id) {
              const result = await poolMysql.query({
                     sql: "DELETE FROM users WHERE id = ?",
                     values: [id],
              });
              return result;
       }
}

module.exports = new ModelUsers();
