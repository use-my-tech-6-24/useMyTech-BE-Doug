const express = require("express");
const helmet = require("helmet");

const itemsRouter = require("../items/items-router.js");
const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");
const rentRouter = require("../rentable/rentable-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/items/", itemsRouter);
server.use("/api/auth/", authRouter);
server.use("/api/users/", usersRouter);
server.use("/api/rentable/", rentRouter);

module.exports = server;
