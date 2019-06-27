const knex = require("knex");
const router = require("express").Router();

const Users = require("./users-model.js");

const knexConfig = require("../knexfile.js");

const restricted = require("../auth/restricted-middleware.js");

const db = knex(knexConfig.development);

router.get("/", restricted, async (req, res) => {
  try {
    const users = await Users.getUsers2();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", restricted, async (req, res) => {
  try {
    const users = await Users.getUsers5(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", restricted, async (req, res) => {
  try {
    const users = await Users.update(req.params.id, req.body);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "We ran into an error" });
    console.log(error);
  }
});

router.get("/items", restricted, async (req, res) => {
  try {
    const users = await Users.getItems();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

/*
select users.id, users.username, items.users_id from users
join users on users.id = items.users_id
select rentable.message, rentable.id from rentable
join users on users.id = items.users_id
where items.id = 1
*/
