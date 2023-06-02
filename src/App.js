// import logo from "./logo.svg";
import "./App.css";

//import myLogo from "./logo.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About/index.js";
import Booking from "./components/Booking/index.js";
import React from "react";
// import Modal from "react-modal";
import Items from "./components/Items/index";
// import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/items" element={<Items />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
