import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function OurService() {
  const { plans } = useContext(UserContext);
  return (
    <div className="py-5">
      <h1 className=" text-3xl pb-10 ">
        <span className="border-b-4 border-black">Our Services</span>
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        {plans.map((i) => (
          <div className=" w-full shadow-2xl group p-5 transition-transform hover:scale-[1.03] hover:translate-y-2 group rounded-lg ">
            <img className="h-[350px] w-full rounded-lg object-cover group-hover:opacity-[90%] " src={i.image} alt={i.title} />
            <h1 className="font-fredericka text-3xl py-5">{i.title}</h1>
            <p className="pb-3">
              {i.desc}
            </p>
            <Link to="/contact" className="text-xl py-3 font-bold font-mono">
              <button className="group-hover:bg-slate-400 active:scale-[0.9]">
                Book Your {i.title}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurService;
