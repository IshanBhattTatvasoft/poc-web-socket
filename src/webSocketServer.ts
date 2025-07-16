import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {

  // Send the fixed message on connection
  ws.send('Response from v2');
});

