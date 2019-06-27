const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("users").insert([
    {
      id: 1,
      username: "test1",
      email: "test1@gmail.com",
      password: bcrypt.hashSync("abc123", 8),
      image_url_user:
        "https://ca.slack-edge.com/T4JUEB3ME-UHQMX3CLS-8aca137aa115-72",
      town: "Los Angeles",
      state: "CA",
      location: "USA"
    },
    {
      id: 2,
      username: "test2",
      email: "test2@gmail.com",
      password: bcrypt.hashSync("abc123", 8),
      image_url_user:
        "https://ca.slack-edge.com/T4JUEB3ME-UHQMX3CLS-8aca137aa115-72",
      town: "Austin",
      state: "TX",
      location: "not usa"
    }
  ]);
};
