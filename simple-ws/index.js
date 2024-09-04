const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
    ws.send(`Roger that! ${message}`);
  });
});

server.listen(10300, () => {
  console.log('Server is listening on port 10300');
});