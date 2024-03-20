import { WebSocketServer } from "ws";

const server = new WebSocketServer({ port: 3000 });

server.on("connection", (ws) => {
  ws.on("error", console.error);
  ws.on("message", (message) => {
    console.log(message);
    const b = Buffer.from(message);
    console.log(b.toString());
    ws.send(`${message}`);
  });
  console.log("connection established");
});
