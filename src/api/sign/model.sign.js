const poolMysql = require("../../lib/database/connection.mysql");

class ModelSign {
       constructor() {}

       /*
              Signin
       */
       async signin(name) {
              const user = await poolMysql.query({
                     sql: "SELECT * FROM users WHERE name = ?",
                     values: [name],
              });
              return user;
       }

       /*
              Signup
       */
       async signup(name, email, password) {
              const result = await poolMysql.query({
                     sql:
                            "INSERT INTO users (name, email, password) VALUES (?,?,?)",
                     values: [name, email, password],
              });
              return result;
       }
}

module.exports = new ModelSign();
