import React from "react";
import Thali from "../assets/Thali.jpg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[1000px] relative m-4">
        <div className="absolute w-full h-full text-gray-200 max-h-500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono">
            <span className="text-blue-300">Best</span>
            <span className="text-orange-500"> Food</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-mono">
            <span className="text-blue-300"> Delivered</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[400px]md:text-6xl md:max-h-[400px] lg:text-7xl lg:max-h-[400px] md:object-fill lg:object-fill "
          src={Thali}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
