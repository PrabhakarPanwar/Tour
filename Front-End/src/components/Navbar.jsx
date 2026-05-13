import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menu_icon from "../assets/img/menu_icon.png";
import { motion } from "framer-motion";

function Navbar() {
  const [hamtrigger, setHamtrigger] = useState(false);

  return (
    <nav className="flex justify-between mx-auto py-4 px-4 relative ">
      <Link to="/">Kanatal Orchids</Link>
      <div className="gap-8 hidden md:flex ">
        <NavLink to="/">
          Home
          <hr />
        </NavLink>
        <NavLink to="/gallery">
          Photo Gallery
          <hr />
        </NavLink>
        <NavLink to="/contact">
          Contact Us
          <hr />{" "}
        </NavLink>
      </div>

      {/* Hamburger Menu */}

      <div
        style={{
          backgroundImage: `url(${menu_icon})`,
          backgroundSize: "cover",
        }}
        className="h-5 w-5 cursor-pointer md:hidden invert"
        onClick={() => setHamtrigger(!hamtrigger)}
      >
        {" "}
      </div>

      <motion.section
        layout
        initial={{ x: "100%" }}
        animate={{ x: hamtrigger ? "0%" : "100%" }}
        transition={{
          duration: 0.2,
        }}
        className="absolute text-center z-10 right-0 top-[56px] md:hidden"
      >
        <div className="gap-8 bg-slate-900 p-3 ">
          <NavLink to="/">
            Home
            <hr />
          </NavLink>
          <NavLink to="/gallery">
            Photo Gallery
            <hr />
          </NavLink>
          <NavLink to="/contact">
            Contact Us
            <hr />
          </NavLink>
        </div>
      </motion.section>
    </nav>
  );
}

export default Navbar;
