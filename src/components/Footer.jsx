import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="w-[85%] m-auto">
        <div className="flex justify-around px-5 py-10">
          <section>
            <strong><h1 className="text-xl mb-5">Address</h1></strong>
            <p>Rental</p>
            <p>Near Kanatal,Uttarakhand</p>
            <p>House 3i4u204i-</p>
          </section>
          <nav className="flex flex-col ">
            <strong><h1 className="text-xl mb-5">Pages</h1></strong>
            <NavLink to="/">Home<hr className="w-3/4"/></NavLink>
            <NavLink to="/services">Services<hr className="w-3/4"/></NavLink>
            <NavLink to="/contact">Contact Us<hr className="w-3/4"/></NavLink>
            <NavLink to="/gallery">Photo Gallery<hr className="w-3/4"/></NavLink>
          </nav>
          <section>
            <strong><h1 className="text-xl mb-5">Contact Us</h1> </strong>
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
            <p>Logo</p>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
