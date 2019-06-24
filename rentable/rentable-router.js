const knex = require("knex");
const router = require("express").Router();

const Rents = require("./rentable-model.js");

const knexConfig = require("../knexfile.js");

const restricted = require("../auth/restricted-middleware.js");

const jwt = require("jsonwebtoken");

const db = knex(knexConfig.development);

router.get("/", restricted, async (req, res) => {
  try {
    const messages = await Rents.getMessages();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/:id", restricted, async (req, res) => {
  try {
    let decodeToken = jwt.verify(
      req.headers.authorization,
      "secret for local development"
    );
    let newMessage = {
      ...req.body,
      user_id: decodeToken.subject,
      username: decodeToken.username,
      item_id: req.params.id
    };
    const message = await Rents.addMessage(newMessage);
    console.log(message);
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.delete("/:id", restricted, async (req, res) => {
  try {
    let currentMessage = await Rents.messageByUserId(req.params.id);
    let decodeToken = jwt.verify(
      req.headers.authorization,
      "secret for local development"
    );
    console.log(currentMessage[0].user_id, "wooo");
    console.log(decodeToken.subject, "haaa");
    if (decodeToken.subject == currentMessage[0].user_id) {
      const message = await Rents.order66(req.params.id);
      res.status(200).json(message);
    } else {
      res.status(500).json({
        message: "Need to be logged in as that user to delete message"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error deleting message"
    });
  }
});

module.exports = router;
