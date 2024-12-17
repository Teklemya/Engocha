import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
// import About from './About';
// import Contact from './Contact';
// import Catering from './Catering';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/menu" element={<Menu />} />
        {/*<Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catering" element={<Catering />} /> */}
      </Routes>
    </Router>
  );
}

export default App;