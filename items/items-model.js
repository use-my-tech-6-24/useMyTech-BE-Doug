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

/*

 select users.id, users.username, items.users_id from users INNER JOIN items on users.id = item.users_id
*/
function getItems() {
  return db("items")
    .select(
      "items.id",
      "items.users_id",
      "items.users_username",
      "items.users_town",
      "items.users_state",
      "items.name",
      "items.image_url",
      "items.price",
      "items.category",
      "items.description",
      "users.image_url_user",
      "users.location"
    )
    .from("items")
    .join("users", "items.users_id", "users.id");
}

function getItemsById(id) {
  return db("items")
    .select(
      "items.id",
      "items.users_id",
      "items.users_username",
      "items.users_town",
      "items.users_state",
      "items.name",
      "items.image_url",
      "items.price",
      "items.category",
      "items.description",
      "users.image_url_user",
      "users.location"
    )
    .from("items")
    .join("users", "items.users_id", "users.id")
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
