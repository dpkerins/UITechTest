import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Welcome from './components/Welcome';
import { useState } from 'react';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';


function App() {
  const [players, setPlayers] = useState([
    {
    name: "Bob",
    surname: "Jones",
    email: "bob@jones.com",
    points: 100,
    nationality: 'China'
    },
    {
    name: "Tina",
    surname: "Smith",
    email: "tina@smith.com",
    points: 125,
    nationality: 'Peru'
    },
    {
      name: "Saanvi",
      surname: "Gupta",
      email: "saanvi@gupta.com",
      points: 110,
      nationality: 'Lithuania'
    },
    {
      name: "Abel",
      surname: "Gupta",
      email: "abel@gupta.com",
      points: 50,
      nationality: 'India'
    }
  ])

  return (
    <div id="bootstrap-overrides">
    <Router>
      <NavBar />
      <Container style={{ padding: "10px" }}>
        <Routes>
          <Route path="/" element={<Registration players={players} setPlayers={setPlayers}/>} />
          <Route path="/welcome" element={<Welcome players={players}/>} />
        </Routes>
      </Container>
    </Router>
    </div>
  );
}

export default App;
