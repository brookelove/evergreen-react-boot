import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Landing.js";
import Artists from "./pages/Artists";
import Policy from "./pages/Policy";
import Piercings from "./pages/Prices";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/artists" element={<Artists />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/piercings" element={<Piercings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
