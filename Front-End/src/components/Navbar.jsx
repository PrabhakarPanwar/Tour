import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between w-[85%] m-auto py-4 px-4">
      <div>
        <NavLink to="/">
          Rental
          <hr />
        </NavLink>
      </div>
      <div className="flex gap-8">
        <NavLink to="/services">
          Services
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
    </nav>
  );
}

export default Navbar;
