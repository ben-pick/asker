import express from "express";
import http from "http";
import { Server } from "socket.io";
import { SocketUser } from "./users/socketUser.interface";
const app = express();

const server = http.createServer(app);

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const socketUsers: SocketUser[] = [];
server.listen(4200, () => {
  console.log("listening on *:4200");
});

io.on("connection", (socket) => {
  for (let [id, s] of io.of("/").sockets) {
    socketUsers.push({
      id: id,
    });
  }
});
