exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments();
    table
      .string("username", 255)
      .unique()
      .notNullable();
    table
      .string("email", 255)
      .unique()
      .notNullable();
    table.string("password", 255).notNullable();
    table.string("image_url", 255);
    table.string("town", 255).notNullable();
    table.string("state", 2).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
