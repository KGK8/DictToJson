import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JsonPlayGround from "./Componenets/JsonPlayGround/JsonPlayGround";
import About from "./Componenets/About/About";
import ContactUs from "./Componenets/ContactUs/ContactUs";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JsonPlayGround />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
