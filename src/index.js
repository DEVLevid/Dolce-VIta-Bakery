import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header'
import Highlights from './components/Highlights/Highlights'
import Scrolly from './components/Scroll/Scrolly';
import Menu from './components/Menu/Menu';
import './global.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <Header />
   <Highlights />
   <Scrolly />
   <Menu />
  </React.StrictMode>
);
