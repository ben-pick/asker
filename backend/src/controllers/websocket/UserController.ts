import SocketUserService from "../../services/SocketUserService";
import { Server, Socket } from "socket.io";

export class UserController {
  private socketService: SocketUserService;
  constructor(socketService: SocketUserService) {
    this.socketService = socketService;
  }
  async updateUsers(io: Server) {
    await this.socketService.updateCurrentUsers(io);
    io.emit("users", this.socketService.loggedInUsers);
  }
  getUsers() {
    return this.socketService.loggedInUsers;
  }
}
