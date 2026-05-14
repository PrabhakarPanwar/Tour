import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="m-auto ">
      <center className="flex flex-wrap gap-3 justify-evenly px-5 py-10">
        <section>

          <span className="text-2xl border-b-2 border-white">Address</span>
          <div className="pt-4">
            <p>Kanatal Orchids</p>
            <p>Chamba-Mussoorie Rd, Kanatal</p>
            <p>Uttarakhand 249145</p>
          </div>
        </section>
        <section>

          <span className="text-2xl border-b-2 border-white">Contact Us</span>
          <div className="mt-4 flex flex-col gap-3">
            <a href="mailto:name@example.com" className=' font-bold '>📧 Email: <span className=" font-normal">kanatal@gmail.com</span></a>
            <a href={"tel:+91234567890"} className=' font-bold '>📞 Phone:+<span className=" font-normal">91 234 567 89</span></a>
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
