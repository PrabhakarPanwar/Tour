import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Gallery() {
  const { gallery } = useContext(UserContext);
  return (
    <div className="flex flex-wrap gap-5 p-5 justify-center relative">
      {gallery.map((i, index) => (
        <div >
          <img key={index} className="h-[250px] w-[250px] rounded-xl absolute shadow-2xl hover:opacity-[20%] transition-opacity duration-500 " src={i.image} alt={i.name} />
          <p className="h-[250px] w-[250px] flex text-center items-center">{i.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
