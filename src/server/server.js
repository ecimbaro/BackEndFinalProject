const express = require("express");
const server = express();
const router = require("../routes/router");
const { routeError } = require("../utils/middleware/routeError");

server.use(express.json());

server.use(router);
server.use(routeError)

module.exports = server;

