import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Highlights from "./components/Highlights/Highlights";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact"
import About from "./components/About/About";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <Highlights />
    <About />
    <Menu />
    <Contact />
    <Footer />
  </React.StrictMode>
);
