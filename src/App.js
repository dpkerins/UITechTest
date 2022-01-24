import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} /> />
        <Route path="/welcome" element={<Welcome/>} /> />
      </Routes>
    </Router>
  );
}

export default App;
