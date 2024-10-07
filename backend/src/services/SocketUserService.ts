import { Server } from "socket.io";
import SocketUser from "../interfaces/SocketUser";
import TokenUser from "../interfaces/TokenUser";
import UserService from "./UserService";
class SocketUserService {
  private _userService: UserService;
  private _loggedInUsers: SocketUser[] = [];
  constructor (userService: UserService) {
    this._userService = userService
  }
  async updateCurrentUsers(io: Server) {
    const newUsers: SocketUser[] = [];
    const socketInfo = []
    for (let [socketId, socketData] of io.of("/").sockets) {
      socketInfo.push({socketId: socketId, tokenUser: socketData.data.user })
    }
    const dbUsers = await this._userService.getUsers(socketInfo.map(s => s.tokenUser))
    for ( const {socketId, tokenUser} of socketInfo) {
      const user = dbUsers.find(u => tokenUser.id == u.id)
      if (user) {
        newUsers.push({id: socketId, user: user})
      }
    }
    this._loggedInUsers = newUsers;
  }
  get loggedInUsers() {
    return this._loggedInUsers;
  }
}

export default SocketUserService;
