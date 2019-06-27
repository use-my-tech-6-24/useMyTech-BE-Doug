exports.up = function(knex, Promise) {
  return knex.schema.createTable("rentable", function(table) {
    table.increments();

    table
      .integer("item_id")
      .notNullable()
      .references("id")
      .inTable("items");
    table.string("message", 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("rentable");
};
