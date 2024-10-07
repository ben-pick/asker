import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export default function useSocket<T>(socket: Socket, topic: string) {
    const [data, setData] = useState(null as null| T);
    const [isConnected, setConnected] = useState(false);

    useEffect(() => {
        const client = socket.connect();
        client.on("connect", () => {
            setConnected(true)
        });
        client.on("disconnect", () => setConnected(false));
        client.on(topic, (val) => {
            setData(val as T)
        })
        return () => {
            socket.disconnect()
        }
    }, [socket]);

    return { data, isConnected };
}

