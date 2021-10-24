import React from "react";
import "normalize.css";
import "./css/main.min.css";
import Header from "./components/Header";
import { Start } from "./components/Start";
import Offer from "./components/Offer";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Start />
      <Offer />
      <About />
      <Contact />
    </div>
  );
};

export default App;
