import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Drop from "./components/Drop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Drop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Blog" element={<Blog />} />

          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
