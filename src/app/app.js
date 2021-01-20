const express = require("express");
const morgan = require("morgan");

const middleware = require("../middlewares/middlewares");
const router = require("../router/router");

const app = express();

//sittings
app.set("port", process.env.PORT || 2000);

//middelware
app.use(middleware);

//routers
app.use(router);

module.exports = app;
