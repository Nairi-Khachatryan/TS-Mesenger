import './Home.css';

const Home = () => {
  const socket = new WebSocket('ws://localhost:8080');

  // Connection opened
  socket.addEventListener('open', (event) => {
    socket.send('Hello Server!');
  });


  
  return <div>Home</div>;
};

export default Home;
