import express from "express";
import { Server } from "socket.io";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
const server = app.listen(3000, () => {
  console.log("Listening on port 3000");
});
const io = new Server(server, {
  cors: {
    origin:
      process.env.NODE_ENV === "production"
        ? false
        : ["http://localhost:5500", "http://127.0.0.1:5500"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", `${socket.id.substring(0, 5)}: ${data}`);
  });
  socket.on("disconnected", () => {
    console.log("Connection is disconnected");
  });
});
