exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", function(table) {
    table.increments();

    table
      .integer("users_id")
      .notNullable()
      .references("id")
      .inTable("users");
    table
      .string("users_username", 255)
      .notNullable()
      .references("username")
      .inTable("users");
    table.string("name", 255).notNullable();
    table.string("image_url", 255);
    table.float("price");
    table.string("type", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("items");
};
