import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Landing.js";
import Artists from "./pages/Artists";
import Policy from "./pages/Policy";
import Piercings from "./pages/Prices";
import Contact from "./pages/Contact";
import About_Us from "./components/About";
import Gallery from "./components/Carosel";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/artists" element={<Artists />} />
          <Route path="/about" element={<About_Us />}></Route>
          <Route path="/policy" element={<Policy />} />
          <Route path="/pricing" element={<Piercings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
