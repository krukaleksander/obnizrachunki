import React from "react";
import "normalize.css";
import "./css/main.min.css";
import Header from "./components/Header";
import { Start } from "./components/Start";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Start />
    </div>
  );
};

export default App;
