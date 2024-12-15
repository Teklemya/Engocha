import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
// import Menu from './Menu';
// import About from './About';
// import Contact from './Contact';
// import Catering from './Catering';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catering" element={<Catering />} /> */}
      </Routes>
    </Router>
  );
}

export default App;