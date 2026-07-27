async function getIndex(req, res) {
  res.render("index");
}

async function getNewMessageForm(req, res) {
  res.render("newMessage");
}

module.exports = { getIndex, getNewMessageForm };
