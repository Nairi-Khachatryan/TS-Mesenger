import { useEffect } from 'react';
import { io } from 'socket.io-client';

const Home = () => {
  useEffect(() => {
    const socket = io('http://localhost:5001', {
      withCredentials: true,
    });

    socket.on('connect', () => {
      console.log('Connected to backend');
      socket.emit('send-message', { text: 'Hello from frontend!' });
    });

    socket.on('receive-message', (data) => {
      console.log('Message received:', data);
    });

    


    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>Check your browser console for messages</div>;
};

export default Home;

