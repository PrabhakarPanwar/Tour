import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="m-auto">
      <center className="flex flex-col md:flex-row gap-3 justify-center md:justify-around px-5 py-10">
        <section>
          <strong className=""><h2 className="border-b w-1/4 md:w-1/6 lg:w-1/2 ">Address </h2></strong>
          <div className="pt-4">
            <p>Kanatal Orchids</p>
            <p>Chamba-Mussoorie Rd, Kanatal</p>
            <p>Uttarakhand 249145</p>
          </div>
        </section>
        <section>
          <strong><h2 className="border-b w-1/3 md:w-1/5 lg:w-36 ">Contact Us </h2></strong>
          <div className="pt-4">
            <p>kanatalOrchids@gmail.com</p>
            <a href={"tel:+91234567890"} className=''>+91 234 567 89 </a>
          </div>
        </section>
        <section className=" ">
          <strong><h2 className="border-b w-20">Pages </h2></strong>
          <div className="flex flex-col pt-4">
            <NavLink to="/">Home<hr className="w-14"/></NavLink>
            <NavLink to="/gallery">Photo Gallery<hr className="w-20"/></NavLink>
            <NavLink to="/contact">Contact Us<hr className="w-20"/></NavLink>
            {/* <NavLink to="/services">Services<hr className="w-1/6"/></NavLink> */}
          </div>
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
