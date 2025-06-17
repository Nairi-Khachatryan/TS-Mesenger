const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
}));

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // frontend URL here
    methods: ['GET', 'POST'],
    credentials: true,
  }
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // socket.on('send-message', (data) => {
  //   socket.broadcast.emit('receive-message', data);
  // });

  socket.on('send-message', (data) => {
  console.log('Message received on server:', data);
  io.emit('receive-message', data);  
});

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });



  
});

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
