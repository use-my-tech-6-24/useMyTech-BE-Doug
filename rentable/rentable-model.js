const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getMessages,
  addMessage,
  order66,
  messageByUserId
};

function getMessages() {
  return db("rentable");
}

function addMessage(message) {
  return getMessages().insert(message);
}

function order66(id) {
  return getMessages()
    .where({ id })
    .del();
}

function messageByUserId(userId) {
  return db("rentable")
    .select("*")
    .from("rentable")
    .where("rentable.id", "=", userId);
}
