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
  const [ListFavorites, SetDataFavorites] = useState([]);
  function addToFavorite(element) {
    let tempList = [...ListFavorites];
    
    let isAlreadyAdded = tempList.some((item) => item.title === element.title);

    if (!isAlreadyAdded) {
      tempList.push(element);
      SetDataFavorites(tempList);
    }
    else{
      console.log(element)
      let i = tempList.findIndex(obj => JSON.stringify(obj) === JSON.stringify(element));
      console.log(i)
      tempList.splice(i,1);
      SetDataFavorites(tempList);
    }
  }


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/irepairtechshop/" exact element={<Index />} />
        <Route path="/irepairtechshop/contact" element={<Contact />} />
        <Route path="/irepairtechshop/phones" element={<Phones elements={ListPhone} addFavorites={addToFavorite} favorites={ListFavorites} />} />
        <Route path="/irepairtechshop/Services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
