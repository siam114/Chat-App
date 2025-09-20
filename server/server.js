import "dotenv/config";
import express from "express";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";

//create express app and http server
const app = express();
const server = http.createServer(app);

//socket io setup
export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

//store online user
export const userSocketMap = {}; // {userId: socketId}

//socket connection handler
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User connected: ", userId);

  if (userId) userSocketMap[userId] = socket.id;

  //emit online users to all connected users
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected: ", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

//middlewares
app.use(express.json({ limit: "4mb" }));
app.use(cors());

//route setup
app.use("/api/status", (req, res) => res.send("Server is live..."));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);

//connect to mongodb
await connectDB();

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

//export server for vercel
export default server;
