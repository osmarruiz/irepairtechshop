import Navbar from './components/navegation/Navbar';
import Index from './components/pages/Index';
import Contact from './components/pages/Contact';
import Phones from './components/pages/Phones';
import Services from './components/pages/Services';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Index/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/phones" element={<Phones/>} />
        <Route path="/Services" element={<Services/>} />
      </Routes>
    </Router>
  );
}

export default App;
