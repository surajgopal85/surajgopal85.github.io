import './App.css';
// Router imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// page imports
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';

import Navbar from './UI/Navbar';
import Footer from './UI/Footer';


function App() {
  return (
    <div className="App">
    {/* Router is parent to Routes */}
    <Router>
      {/* Routes holds multiple routes - diff btwn Router/Routes??? */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDisplay />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
