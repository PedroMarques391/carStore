import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Garage from './pages/Garage';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Car from './pages/Car';
import SearchResult from './pages/SearchResult';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar isOpen={isOpen} handleToggle={handleToggle} />
        <ScrollToTop isOpen={isOpen} handleToggle={handleToggle} />
        <Routes>
          <Route path="/carStore" element={<Home isOpen={isOpen} />} />
          <Route path="/carStore/about" element={<About />} />
          <Route path="/carStore/garage" element={<Garage />} />
          <Route path="/carStore/search" element={<SearchResult />} />
          <Route path="/carStore/garage/:id/:name" element={<Car />} />
          <Route path="/carStore/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
