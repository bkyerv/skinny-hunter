const express = require("express");

require("./db/db");

const app = express();

app.listen(3000, console.log("server is up and running on port 3000"));
