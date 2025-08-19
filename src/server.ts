import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.data.username = 'alice';
  socket.join('room1');
});

console.log('running');
server.listen(5000);
