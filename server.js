const http = require("http");
const WebSocket = require("ws");
const express = require("express");
const bodyParser = require("body-parser");
let ejs = require("ejs");

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
const INDEX = "/index.html";

let playerList = [];

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("start");
});

app.get("/list", function (req, res) {
  res.render("list", { players: playerList });
});

app.post("/", function (req, res) {
  if (req.body.players) playerList = req.body.players;
  res.redirect("list");
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

/* wss.on("connection", function (ws) {
  console.log("Client connected");
  ws.send(JSON.stringify(board)); // send board to client
  ws.on("message", function (data) {
    if (data.toString("utf8") === "reset") resetBoard(); // reset
    else if (data.toString("utf8") === "ping") console.log("Connection renewed");
    else {
      const info = JSON.parse(data); // analyze data
      if (board[info.tileID - 1] === undefined)
        board[info.tileID - 1] = info.color; // only unoccupied tiles can be marked
      else if (board[info.tileID - 1] === info.color) board[info.tileID - 1] = undefined; // only the color, which has already marked a tile, can unmark that tile
    }
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(board));
      }
    });
  });
  ws.on("close", () => console.log("Client disconnected"));
});
 */
