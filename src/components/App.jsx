import React from "react";
import Navbar from "./Navbar";
import "./style/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home, Projects } from "./pages/index";
import Footer from "./Footer";



function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path = "/" element = { <Home/> }/>
        <Route path = "/about" element = { <About/> }/>
        <Route path = "/contact" element = { <Contact/> }/>
        <Route path = "/projects" element = { <Projects/> }/>
      </Routes>

    <Footer />
    </BrowserRouter>
  );
}

export default App;
