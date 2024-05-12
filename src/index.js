import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header'
import Highlights from './components/Highlights/Highlights'
import About from './components/About/About'
import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Header />
   <Highlights />
   <About />
  </React.StrictMode>
);
