import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JsonPlayGround from "./Componenets/JsonPlayGround/JsonPlayGround";
import About from "./Componenets/About/About";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JsonPlayGround />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
