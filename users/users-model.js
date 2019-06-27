const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  add,
  findBy,
  findById,
  // getUsers,
  getUsers2,
  getItems,
  getUsers3,
  getUsers4,
  getItems4,
  getUsers5,
  rentableItems,
  messagesByItemId,
  comboItems,
  update
};

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users").where(filter);
}

/*
function getUsers() {
  return db("users")
    .select(
      "users.id",
      "users.username",
      "users.email",
      "items.id",
      "items.users_id",
      "items.users_username",
      "items.name",
      "items.image_url",
      "items.price",
      "items.type"
    )
    .from("users")
    .as("users")
    .leftJoin("items", "users.id", "items.users_id")
    .where("users.id", "1");
}
*/

function getUsers2() {
  return db("users");
}

function getItems() {
  return db("items");
}

async function getUsers3() {
  let a = await getUsers2();
  let b = await getItems();

  return {
    ...a,
    items: b
  };
}

async function getUsers5(id) {
  let a = await getUsers4(id);
  let b = await getItems4(id);
  let c = await rentableItems(id);
  let d = await comboItems(id);
  return {
    ...a,
    items: d
  };
}

async function comboItems(id) {
  let a = await getItems4(id);
  let c = [];
  let e = await messagesByItemId();
  console.log(e);
  let f = [];
  let messages = [];
  let messages3 = [];
  let b = a.forEach(itema => {
    c.push(itema.id);
    let message2 = [];
    e.forEach(item => {
      console.log(item.id, "BLUEFACE");
      if (item.item_id == itema.id) {
        message2.push(item);
        messages.push(item);
        messages3.push(item.item_id);
        console.log(message2, "AEANNNPNFN");
        itema = { ...itema, messages: message2 };
      } else {
      }
    });
    f.push(itema);
  });
  let d = await messagesByItemId(...c);
  console.log(b);
  console.log(f, "aaaaa");
  console.log(messages, "AAARSTARSTRA");
  console.log(c, "WIIII");
  //  console.log(a, "MMMMMMMMMMMMM");
  console.log(messages3, "AEOARSENI");
  return f;
}

function getUsers4(id) {
  return db("users")
    .select(["*"])
    .from("users")
    .where("users.id", "=", id)
    .first();
}

function getItems4(id) {
  /*
  return db("items")
    .select(["*"])
    .from("items")
    .where("items.users_id", "=", id);
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

    .where("items.users_id", "=", id);
}

function rentableItems(id) {
  return db("items")
    .select(["*"])
    .from("items")
    .join("rentable", "rentable.item_id", "items.id")
    .where("items.users_id", "=", id);
}

function messagesByItemId(itemId) {
  return db("rentable")
    .select("*")
    .from("rentable");
  //.where("rentable.item_id", "=", itemId);
}

function update(id, changes) {
  let ida = id;
  return getUsers2()
    .where({ id })
    .update(changes, "*")
    .then(() => {
      return getUsers5(ida);
    });
}

/*

select users.id, users.username, users.email, items.id, items.users_id, items.users_username, items.name, items.image_url, items.price, items.type
from users as users
left join items as items on (users.id = items.users_id)
where users.id = 1

*/
