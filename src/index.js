import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/main.css'
import Home from './home.js';
import About from './about-us.js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';
import Header from './components/header/header.js';
import { BrowserRouter as GroupRoute, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GroupRoute>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </GroupRoute>
  </React.StrictMode>
);