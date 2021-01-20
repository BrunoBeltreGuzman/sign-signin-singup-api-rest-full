const mysql = require("mysql");
const { promisify } = require("util");
const { databaseMysql } = require("../../config/database.mysql");

const pool = mysql.createPool(databaseMysql);
pool.getConnection(function (error, connection) {
       if (error) {
              if (error.code === "PROTOCOL_CONNECTION_LOST") {
                     console.error("Database connection was closed.");
                     throw error;
              }
              if (error.code === "ER_CON_COUNT_ERROR") {
                     console.error("Database has to many connections");
                     throw error;
              }
              if (error.code === "ECONNREFUSED") {
                     console.error("Database connection was refused");
                     throw error;
              }
       } else {
              if (connection) {
                     connection.release();
                     console.log(
                            "Database '" +
                                   databaseMysql.database +
                                   "'  is connected"
                     );
                     return;
              }
       }
});

// Promisify Pool Querys
pool.query = promisify(pool.query);

module.exports = pool;
