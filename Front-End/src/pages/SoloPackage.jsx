import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { easeInOut, motion, rgba } from "framer-motion";

function SoloPackage() {
  const { plans } = useContext(UserContext);

  const data = useParams();
  const pack = plans.find((i) => i.id == data.id);
  return (
    <main className="text-center py-4">
      <h2 className="text-5xl py-5"><span className="border-b-4 border-black">{pack.title}</span></h2>
      <div className="py-5">
        <section>
          <img className="h-[400px] w-[400px] mx-auto rounded-lg" src={pack.image} alt={pack.title} />
        </section>
        <section >
          <h2><span className="text-3xl border-b-2 border-black border-double">Description</span></h2>
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
      <Link to="/contact" className="text-xl font-bold font-mono">
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
          className="group-hover:bg-slate-400 bg-slate-300 "
        >
          Book Your {pack.title}
        </motion.button>
      </Link>
    </main>
  );
}

export default SoloPackage;
