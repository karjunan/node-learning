const websocket = require('ws');

const server = new websocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('client connected');

  ws.send('hello from krishna');

  ws.on('message', (message) => {
    ws.send(`Message from server ", ${message}`);
  });
});
