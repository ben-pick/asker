import io from "socket.io-client";

const socket = io(process.env.backend_host, {
  withCredentials: true,
  autoConnect: false
})

export { socket };
