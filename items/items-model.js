const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getItems,
  getItemsById,
  messagesByItemId,
  add,
  findById,
  update,
  order66,
  getItemsByCategoryId
};

function add(item) {
  return getItems().insert(item);
}

function findById(id) {
  return db("items")
    .where({ id })
    .first();
}

function getItems() {
  return db("items");
}

function getItemsById(id) {
  return db("items")
    .select(["*"])
    .from("items")
    .where("items.id", "=", id);
}

function messagesByItemId(itemId) {
  return db("rentable")
    .select("*")
    .from("rentable")
    .where("rentable.item_id", "=", itemId);
}

function getItemsByCategoryId(id) {
  return db("items")
    .select(["*"])
    .from("items")
    .where("items.category", "=", id);
}

function update(id, changes) {
  return getItems()
    .where({ id })
    .update(changes, "*");
}

function order66(id) {
  return getItems()
    .where({ id })
    .del();
}
