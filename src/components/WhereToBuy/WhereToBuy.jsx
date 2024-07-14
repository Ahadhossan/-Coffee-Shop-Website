import React from "react";
import world_map from '../../assets/world-map.png'

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 place-items-center">
        <div className="space-y-8">
          <h1 className="font-serif text-4xl font-bold text-darkGray">
            Buy our products from anywhere
          </h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full input-style"
            />
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Country"
              className="w-full input-style "
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full lg:w-[150px]"
            />
          </div>
          <button className="w-full primary-btn">Order Now</button>
        </div>
        <div className="col-span-2">
          <img src={world_map} alt="" className="w-full sm:w-[500px] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default WhereToBuy;
