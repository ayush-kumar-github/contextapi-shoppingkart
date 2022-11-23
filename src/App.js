import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./compo/Header";
import Cart from "./compo/Cart";
import Home from "./compo/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
