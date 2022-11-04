import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from "react"

import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/events' element={<Events evtState={useState([])} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
