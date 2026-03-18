import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Gallery() {
  const { gallery } = useContext(UserContext);
  return (
    <div className="flex flex-wrap gap-5 p-5 justify-center relative">
      <center className="py-5">
        <h1>Kanatal Orchids 📸 Photo Gallery</h1>
        <h2 className="w-[70%]">Welcome to a visual journey through the serene beauty of Kanatal Orchids. Every photograph showcased here was taken within the premises—either by the property owner or by our cherished guests. From misty mountain views to cozy interiors, these images capture the essence of your stay in the heart of nature.</h2>
      </center>
      {gallery.map((i, index) => (
        <div key={index}>
          <img className="h-[250px] w-[250px] rounded-xl absolute shadow-2xl hover:opacity-[20%] transition-opacity duration-500 " src={i.image} alt={i.name} />
          <p className="h-[250px] w-[250px] flex text-center items-center">{i.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
