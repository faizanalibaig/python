import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app); //http server
const io = new Server(httpServer); //socket server

/* socket.io connection */
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  /* event */
  socket.on('chat message', (data) => {
    console.log(`Message from ${socket.id}: ${data}`);
    socket.emit('reply', `Server received: ${data}`);
  });

  /* disconnection */
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

/* server listen */
httpServer.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
