import { Server, Socket } from "socket.io";
import { UserController } from "../../controllers/websocket/UserController";
import SocketUserService from "../../services/SocketUserService";
import UserService from "../../services/UserService";
const controller = new UserController(new SocketUserService(new UserService()));

export default async function router(socket: Socket, server: Server) {
  await controller.updateUsers(server);
  socket.on("disconnect", async () => {
    await controller.updateUsers(server);
  });
}
