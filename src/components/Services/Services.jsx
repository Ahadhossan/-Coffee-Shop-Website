import React from "react";
import coffee1 from '../../assets/coffee/coffee1.png'
import coffee3 from "../../assets/coffee/coffee3.png";

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      <div className="max-w-lg mx-auto space-y-2 text-center">
        <h1 className="text-3xl font-bold text-lightGray">
          Fresh and <span className="text-primary">Tasty coffee</span>
        </h1>
        <p className="text-sm opacity-50">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex
          dolorem fuga.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="p-4 space-y-6 text-center">
          <img
            src={coffee1}
            alt=""
            className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
          />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-primary">Black Coffee</h1>
            <p className="text-darkGray">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="p-4 space-y-6 text-center">
          <img
            src={coffee3}
            alt=""
            className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
          />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-primary">Hot Coffee</h1>
            <p className="text-darkGray">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="p-4 space-y-6 text-center">
          <img
          src={coffee1}
            alt=""
            className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
          />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-primary">Cold Coffee</h1>
            <p className="text-darkGray">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
