import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { easeInOut, motion, rgba } from "framer-motion";

function SoloPackage() {
  const { plans } = useContext(UserContext);

  const data = useParams();
  const pack = plans.find((i) => i.id == data.id);
  return (
    <main className="text-center">
      <h1 className="py-5">{pack.title}</h1>
      <div className="py-5">
        <section>
          <img className="" src={pack.image} alt={pack.title} />
        </section>
        <section >
          <h2><span className="text-3xl border-b-2 border-black">Description</span></h2>
          <p className="w-[80%] mx-auto" >{pack.desc}</p>
        </section>
        <h2><span className="text-3xl border-b-2 border-black">Highlights</span></h2>
        <ul className="list-disc list-inside">
          {pack.highlights.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
        <h2><span className="text-3xl border-b-2 border-black">Expects</span></h2>
        <ul className="list-disc list-inside">
          {pack.expect.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
        <h2><span className="text-3xl border-b-2 border-black">Why Choose ?</span></h2>
        <p className="w-[80%] mx-auto">{pack.whyChoose}</p>
      </div>
      <div className="text-xl py-3 font-bold font-mono">
        <motion.button
          animate={{
            scale: [0.5, 1.5],
            backgroundColor: ["rgb(255, 0, 0)", "rgb(0,255,0)", "rgb(0,0,255)"],
          }}
          transition={{
            duration: 1,
            repeatType: "mirror",
            repeat: Infinity,
            ease: easeInOut,
          }}
          className="group-hover:bg-slate-400 bg-slate-300"
        >
          Book Your {pack.title}
        </motion.button>
      </div>
    </main>
  );
}

export default SoloPackage;
