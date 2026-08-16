#! /usr/bin/env node

const { Client } = require("pg");
const { argv } = require("node:process");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(50),
  message_text VARCHAR(255),
  time timestamp
);

INSERT INTO messages
(username, message_text, time)
VALUES ('Bryan', 'hey nice website!', now()),
       ('Odin', 'just sayin hello', now()),
	   ('Damon', 'damon speaking!', now());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
