import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="">
      <div className="w-[85%] m-auto">
        <div className="flex justify-around px-5 py-10">
          <section>
            <strong><h2 className="text-xl mb-5">Address</h2></strong>
            <p>Kanatal Orchids</p>
            <p>Chamba-Mussoorie Rd, Kanatal</p>
            <p>Uttarakhand 249145</p>
          </section>
          <nav className="flex flex-col ">
            <strong><h2 className="text-xl mb-5">Pages</h2></strong>
            <NavLink to="/">Home<hr className="w-3/4" /></NavLink>
            {/* <NavLink to="/services">Services<hr className="w-3/4" /></NavLink> */}
            <NavLink to="/contact">Contact Us<hr className="w-3/4" /></NavLink>
            <NavLink to="/gallery">Photo Gallery<hr className="w-3/4" /></NavLink>
          </nav>
          <section>
            <strong><h2 className="text-xl mb-5">Contact Us</h2> </strong>
            <p></p>
            <p>rental@gmail.com</p>
            <p>+1234567890</p>
          </section>
        </div>
        <hr className="bg-[#e6dece] h-[2px]" />
        <div className="flex justify-between text-[12px] py-10 px-5">
          <section>
            <p>copyright</p>
          </section>
          <section>
            <p>Kanatal Orchids</p>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
