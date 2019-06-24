exports.seed = function(knex, Promise) {
  return knex("users").insert([
    { id: 1, username: "test1", email: "test1@gmail.com", password: "abc123" },
    { id: 2, username: "test2", email: "test2@gmail.com", password: "abc123" }
  ]);
};
