require("dotenv").config();
const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 25000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
