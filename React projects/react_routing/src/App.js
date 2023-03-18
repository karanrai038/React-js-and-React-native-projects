import React from "react";
import About from "./About";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
        <div className="container bg-light-subtle">
          <Carousel />

          {/* <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes> */}
          <Home />
          <About />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
