import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function OurService() {
  const { plans } = useContext(UserContext);
  return (
    <div className="text-center  py-5">
      <h1 className=" text-3xl pb-10">
        Our Services
        <hr className="bg-black mx-auto w-16 h-[3px]" />
      </h1>
      <div className="flex gap-4">
        {plans.map((i) => (
          <div className=" w-full shadow-2xl group p-5 transition-transform hover:scale-[1.03] hover:translate-y-2 rounded-lg ">
            <img className="h-[250px] w-full rounded-lg object-cover group-hover:opacity-[90%] " src={i.image} alt={i.title} />
            <h1 className="font-fredericka text-3xl py-5">{i.title}</h1>
            <p className="pb-3">
              {i.desc}
            </p>
            <Link className="text-xl py-3 font-bold font-fredericka ">
              Book Your {i.title}
            </Link>
            <hr className="bg-black mx-auto w-20 h-[3px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurService;
