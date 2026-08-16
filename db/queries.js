const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);

  return rows[0];
}

async function addMessage(username, message_text) {
  await pool.query(
    "INSERT INTO messages (username, message_text, time) VALUES ($1, $2, now())",
    [username, message_text],
  );
}

module.exports = { getAllMessages, getMessage, addMessage };
