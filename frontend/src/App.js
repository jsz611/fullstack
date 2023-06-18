import React from "react";
import AboutUs from "./pages/AboutUs";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import Nav from "./components/Nav";
import PortfolioDatail from "./components/PortfolioDatail"




function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<AboutUs />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route  path="/contact" element={<ContactMe />} />
        <Route  path="/portfolio/:id" element={<PortfolioDatail />} />

      </Routes>
    </div>
  );
}

export default App;
