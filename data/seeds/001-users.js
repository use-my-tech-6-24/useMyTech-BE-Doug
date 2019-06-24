const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      id: 1,
      username: "test1",
      email: "test1@gmail.com",
      password: bcrypt.hashSync("abc123", 8)
    },
    {
      id: 2,
      username: "test2",
      email: "test2@gmail.com",
      password: bcrypt.hashSync("abc123", 8)
    }
  ]);
};
