const express = require("express");
const morgan = require('morgan')
const characterMiddleware = require("./middlewares/character.js");
const abilityMiddleware = require("./middlewares/ability.js");

const server = express();

server.use(morgan('dev'))
server.use(express.json());

server.use("/character", characterMiddleware);
server.use("/ability", abilityMiddleware);

server.get("/", (req, res) => {
  res.send("Henry Sequelize Homework");
});

module.exports = server;
