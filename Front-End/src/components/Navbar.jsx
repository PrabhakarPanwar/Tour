import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between mx-auto py-4 px-4">
      <p>
        Kanatal Orchids
        <hr />
      </p>
      <div className="gap-8 hidden md:flex ">
        <NavLink to="/">
          Home
          <hr />
        </NavLink>
        {/* <NavLink to="/services">
          Services
          <hr />
        </NavLink> */}
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

      <div style={{ backgroundImage: url("") }} className="">

      </div>
    </nav>
  );
}

export default Navbar;
