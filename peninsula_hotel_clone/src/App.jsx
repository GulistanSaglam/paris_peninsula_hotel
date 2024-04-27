import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import MainHeader from './components/Header/MainHeader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import RoomSuits from './components/RoomSuits/RoomSuits';
import Dinning from './components/Dinning/Dinning';
import Offers from './components/Offers/Offers';
import Wellness from './components/Wellness/Wellness';
import Academy from './components/Academy/Academy';
import Events from './components/Events/Events';
import Gifts from './components/Gifts/Gifts';
import Room from './components/RoomSuits/Room.jsx';
import Reservation from './components/Reservation/Reservation.jsx';
import ScrollToTop from './components/Util/ScrollToTop.jsx';

import { details } from './data/details.js';
import { ATGLANCE } from './data/atGlance.js';



function App() {

  const [storeDetails, setStoreDetails] = useState(details);
  const [glance, setGlance] = useState(ATGLANCE);

  return (
    <BrowserRouter>
    <ScrollToTop/>
    <MainHeader/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home glance={glance}/>}/>
      <Route path="/roomsuits" element={<RoomSuits details={storeDetails}/>}/>
      <Route path="/roomsuits/:slug" element={<Room/>}/>
      <Route path="/dinning" element={<Dinning/>}/>
      <Route path="/wellness" element={<Wellness/>}/>
      <Route path="/offers" element={<Offers/>}/>
      <Route path="/academy" element={<Academy/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/gifts" element={<Gifts/>}/>
      <Route path="/reservation" element={<Reservation/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}


export default App
