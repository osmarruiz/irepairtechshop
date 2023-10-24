import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './components/pages/Index';
import Contact from './components/pages/Contact';
import Phones from './components/pages/Phones';
import Services from './components/pages/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataPhone from './data/DataPhone';
import { useState } from 'react';

function App() {
  const [ListPhone, SetDataPhone] = useState(DataPhone);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/irepairtechshop/" exact element={<Index />} />
        <Route path="/irepairtechshop/contact" element={<Contact />} />
        <Route path="/irepairtechshop/phones" element={<Phones elements={ListPhone}/>} />
        <Route path="/irepairtechshop/Services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
