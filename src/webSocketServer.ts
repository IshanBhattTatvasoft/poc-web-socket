import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected');

  let counter = 1;

  const intervalId = setInterval(() => {
    const message = `Response from v2 (${counter})`;
    ws.send(message);
    counter++;
  }, 10000);

  ws.send(`Response from v2 (${counter})`);
  counter++;

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(intervalId);
  });
});
