const knex = require("knex");
const router = require("express").Router();

const Items = require("./items-model.js");

const knexConfig = require("../knexfile.js");

const restricted = require("../auth/restricted-middleware.js");
const jwt = require("jsonwebtoken");

const db = knex(knexConfig.development);

router.get("/", async (req, res) => {
  try {
    const items = await Items.getItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const items = await Items.getItemsById(req.params.id);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/messages/:id", restricted, async (req, res) => {
  try {
    const items = await Items.messagesByItemId(req.params.id);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", restricted, async (req, res) => {
  try {
    let decodeToken = jwt.verify(
      req.headers.authorization,
      "secret for local development"
    );
    let testBody = req.body.category.toLowerCase();
    console.log(testBody);
    req.body = { ...req.body, category: testBody };
    let newItem = {
      ...req.body,
      users_id: decodeToken.subject,
      users_username: decodeToken.username
    };
    const items = await Items.add(newItem);
    console.log(items);
    res.status(201).json(items);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", restricted, async (req, res) => {
  try {
    const updateItem = await Items.update(req.params.id, req.body);
    res.status(200).json(updateItem);
  } catch (error) {
    res.status(500).json({ message: "We ran into an error" });
    console.log(error);
  }
});

router.delete("/:id", restricted, async (req, res) => {
  try {
    const item = await Items.order66(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error deleting item"
    });
  }
});

router.get("/category/:id", async (req, res) => {
  try {
    let lowerCase = req.params.id;

    const item = await Items.getItemsByCategoryId(lowerCase.toLowerCase());
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error grabbing items by categories"
    });
  }
});

module.exports = router;
