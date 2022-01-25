import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Welcome from './components/Welcome';
import { useState } from 'react';


function App() {
  const [players, setPlayers] = useState([
    {
    name: "Bob",
    surname: "Jones",
    email: "bob@jones.com",
    points: 100
    },
    {
    name: "Tina",
    surname: "Smith",
    email: "tina@smith.com",
    points: 125
    },
    {
      name: "Saanvi",
      surname: "Gupta",
      email: "saanvi@gupta.com",
      points: 110
    }
  ])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration players={players} setPlayers={setPlayers}/>} />
        <Route path="/welcome" element={<Welcome players={players}/>} />
      </Routes>
    </Router>
  );
}

export default App;
