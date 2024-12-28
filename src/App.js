import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Background from './Background';
import Projects from './Projects';

// <Route path="/bpb" element={<BullpenBudgets />} />
// <Route path="/spx" element={<SPXRadar />} />
// <Route href="/gdr" element={<GooseRobots />} />
function App() {
  return (
    <Router>
      <div className="App">
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
