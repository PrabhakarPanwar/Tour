import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu_icon from "../assets/img/menu_icon.png"

function Navbar() {

  const [hamtrigger, setHamtrigger] = useState(false)

  return (
    <nav className="flex justify-between mx-auto py-4 px-4">
      <p>
        Kanatal Orchids
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

      <div style={{ backgroundImage: `url(${menu_icon})`, backgroundSize: "cover" }} className="h-5 w-5 cursor-pointer md:hidden relative " onClick={() => setHamtrigger(!hamtrigger)}> </div>

      <section className={hamtrigger ? ("absolute translate-x-0 z-10 text-center transition-transform right-0 top-[56px] md:hidden") : ("absolute transition-transform translate-x-full right-0 top-[56px] ")}>
        <div className="gap-8 bg-slate-900 p-3">
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
            <hr />
          </NavLink>
        </div>
      </section>

    </nav>
  );
}

export default Navbar;
