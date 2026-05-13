import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import SoloPackage from "./pages/SoloPackage.jsx";

function App() {
  return (
    <div className="bg-[#012636] text-[#b2ebf2] overflow-hidden">
      <Navbar />
      <main className="mx-auto bg-[#e0f7fa] text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package/:id" element={<SoloPackage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
