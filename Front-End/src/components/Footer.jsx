import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="m-auto">
      <center className="flex flex-col md:flex-row gap-3 justify-center md:justify-around px-5 py-10">
        <section>
          <strong><h2 className="underline">Address</h2></strong>
          <p>Kanatal Orchids</p>
          <p>Chamba-Mussoorie Rd, Kanatal</p>
          <p>Uttarakhand 249145</p>
        </section>
        <section>
          <strong><h2 className="underline">Contact Us</h2></strong>
          <p></p>
          <p>rental@gmail.com</p>
          <a href={"tel:+91234567890"} className=''>+91 234 567 89 </a>
        </section>
        <section className="flex flex-col ">
          <strong><h2 className="underline">Pages</h2></strong>
          <NavLink to="/">Home<hr className="w-1/6" /></NavLink>
          <NavLink to="/gallery">Photo Gallery<hr className="w-1/6" /></NavLink>
          <NavLink to="/contact">Contact Us<hr className="w-1/6" /></NavLink>
          {/* <NavLink to="/services">Services<hr className="w-1/6"/></NavLink> */}
        </section>
      </center>
      <hr className="bg-[#e6dece] h-[2px]" />
      <div className="flex justify-between text-[12px] py-10 px-5">
        <section>
          <p className="text-md">copyright</p>
        </section>
        <section>
          <p className="text-md">Kanatal Orchids</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
