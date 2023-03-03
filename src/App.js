// router imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
// UI imports
import Navbar from './UI/Navbar';
// style import
import './App.css';
import './styles/Navbar.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/experience' element={<Experience />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
