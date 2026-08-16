const generateId = require("../Utils/generateId");
const db = require("../db/queries");
const { validationResult } = require("express-validator");

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getIndex(req, res) {
  const dbmessages = await db.getAllMessages();
  res.render("index", { messages: dbmessages });
}

async function getMessage(req, res) {
  const message = await db.getMessage(req.params.id);

  message
    ? res.render("message", { message: message })
    : res.render("messageNotFound");
}

async function getNewMessageForm(req, res) {
  res.render("newMessage");
}

async function postNewMessage(req, res) {
  const errors = validationResult(req);
  messages.push({
    id: generateId(),
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });

  if (!errors.isEmpty()) {
    res.status(400).render("newMessage", {
      errors: errors.array(),
      message: req.body.message,
      author: req.body.author,
    });
  } else {
    await db.addMessage(req.body.author, req.body.message);
    res.redirect("/");
  }
}

module.exports = {
  getIndex,
  getNewMessageForm,
  postNewMessage,
  getMessage,
};
