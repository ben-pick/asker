import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
import userRouter from "./routes/rest/userRoutes";
import socketUserRouter from "./routes/websocket/userRoutes";
import validateToken from "./middleware/websocket/auth";
const app = express();

const server = http.createServer(app);

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_HOST,
    credentials: true
  },
});
server.listen(process.env.PORT, () => {
  console.log("listening on *:4200");
});
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(userRouter);
io.on("connection", async (socket) => {
  await socketUserRouter(socket, io);
  
});

io.use((socket, next) => {
  validateToken(socket, next)
})



