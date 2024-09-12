import React from "react";

const CommonSlide = ({ logo, font, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[50vh] rounded my-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logo})`,
      }}
    >
      <div className="flex items-centers">
        <p className="text-white text-5xl font-bold mt-24 ml-32">{font}</p>
      </div>
      <div className="text-white w-[15%] mx-auto mt-24 text-center">
        <p className="bg-red-600 p-2 rounded-t">{text}</p>
      </div>
    </div>
  );
};

export default CommonSlide;
