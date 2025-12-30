import { io } from "socket.io-client";

let socket = null;

export const connectSocket = (userId) => {
  socket = io(
    import.meta.env.MODE === "development"
      ? import.meta.env.VITE_DEV_SOCKET_URL
      : "/",
    {
      query: { userId },
    }
  );

  return socket;
};

export const getSocket = () => socket;

export const disconnetSocket = () => {
  if (socket) {
    socket.disconnect(); // ✅ correct API
    socket = null;
  }
};
