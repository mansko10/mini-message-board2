const generateId = require("../Utils/generateId");

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
  res.render("index", { messages: messages });
}

async function getNewMessageForm(req, res) {
  res.render("newMessage");
}

async function postNewMessage(req, res) {
  console.log(req.body);
  messages.push({
    id: generateId(),
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
}

module.exports = { getIndex, getNewMessageForm, postNewMessage };
