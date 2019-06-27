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
  getItemsByCategoryId,
  getMessagesId
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
  /*
  return db("items")
    .select(["*"])
    .from("items")
    .where("items.id", "=", id);
    */
  return db("users")
    .join("users", "users.id", "items.users_id")
    .select(
      "users.username",
      "users.town",
      "users.state",
      "items.name",
      "items.users_id",
      "items.image_url",
      "items.price",
      "items.category",
      "items.description"
    )
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

function getMessagesId() {
  return db("rentable")
    .select("rentable.item_id")
    .from("rentable");
}

function order66(id) {
  return getItems()
    .where({ id })
    .del()
    .then(() => {
      return getItems();
    });
}
