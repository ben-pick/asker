import { ExtendedError, Socket } from "socket.io"
import {  verifyToken } from "../../utils/token";
import cookie from 'cookie';
export default function validateToken(socket: Socket, next: (err?: ExtendedError) => void) {
    try {
        const socketCookie = socket.handshake.headers.cookie;
        const cookies = cookie.parse(socketCookie ?? "")
        const decoded = verifyToken(cookies['accessToken']);
        socket.data.user = decoded;
        return next()
    } catch (err){
        return next(new Error())
    }
}
