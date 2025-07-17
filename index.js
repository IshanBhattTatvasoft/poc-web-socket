// server.js
const WebSocket = require("ws");

const PORT = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server started on ws://localhost:${PORT}`);

wss.on("connection", (ws) => {
  console.log("New client connected");
  let counter = 1;

  const interval = setInterval(() => {
    const message = `Response from V1 (${counter})`;
    ws.send(message);
    console.log(`Sent: ${message}`);
    counter++;
  }, 5000); // 30 seconds

  const message = `Response from V1 (${counter})`;
  ws.send(message);

  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });

  ws.on("error", (err) => {
    console.error("WebSocket error:", err);
  });
});
