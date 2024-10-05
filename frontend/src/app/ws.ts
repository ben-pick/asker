import io from "socket.io-client";

const ws = io("localhost:4200");

export { ws };
