const { Pool, Client } = require("pg");

const client = new Client();

client.connect().then(console.log).catch(console.log);
