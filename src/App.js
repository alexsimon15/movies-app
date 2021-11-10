import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route exact path='/' component={Home} />
      </Routes>
    </>
  );
}

export default App;
