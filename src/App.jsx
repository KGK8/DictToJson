import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JsonPlayGround from "./Componenets/JsonPlayGround/JsonPlayGround";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JsonPlayGround />} />
      </Routes>
    </Router>
  );
};

export default App;
