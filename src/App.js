import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './components/pages/Index';
import Contact from './components/pages/Contact';
import Phones from './components/pages/Phones';
import Services from './components/pages/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataPhone from './data/DataPhone';
import React,{ useState } from 'react';

export const PhoneContext = React.createContext();
function App() {

  
  //listas de telefonos y favoritos
  const [ListPhone] = useState(DataPhone);
  const [ListFavorites, setDataFavorites] = useState([]);

  // funcion que añade a la lista de favoritos una card de telefono especifica
  function addToFavorite(element) {
    let tempList = [...ListFavorites];
    let isAlreadyAdded = tempList.some((item) => item.title === element.title);

    if (!isAlreadyAdded) {
      tempList.push(element);
      setDataFavorites(tempList);
    }
    else {
      let i = tempList.findIndex(obj => JSON.stringify(obj) === JSON.stringify(element));
      tempList.splice(i, 1);
      setDataFavorites(tempList);
    }
  }


  return (
    <Router>
      <PhoneContext.Provider value={ListPhone}>
      <Navbar />
      <Routes>
        <Route path="/irepairtechshop/" exact element={<Index />} />
        <Route path="/irepairtechshop/contact" element={<Contact />} />
        <Route path="/irepairtechshop/phones" element={<Phones  addFavorites={addToFavorite} favorites={ListFavorites} />} />
        <Route path="/irepairtechshop/Services" element={<Services />} />
      </Routes>
      <Footer />
      </PhoneContext.Provider>
    </Router>
  );
}

export default App;
