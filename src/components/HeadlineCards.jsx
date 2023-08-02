import React from "react";
import bogos from "../assets/bogos.jpg";
import daily from "../assets/daily.jpg";
import Desert from "../assets/Desert.jpg";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ">
      <div className="rounded-xl relative m-4">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl  px-2 pt-4">Momo & Chowin</p>
          <p className="px-2">Through Best Restaurants</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-center rounded-xl"
          src={bogos}
          alt="/"
        />
      </div>
      <div className="rounded-xl relative m-4">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl  px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-center rounded-xl"
          src={daily}
          alt="/"
        />
      </div>
      <div className="rounded-xl relative m-4">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl  px-2 pt-4">
            We Delevered Deserts Top
          </p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-center rounded-xl"
          src={Desert}
          alt="/"
        />
      </div>
    </div>
  );
};
export default HeadlineCards;
