import React from "react";
import credit_card from "../../assets/website/credit-cards.webp";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Coders Cafe</h1>
            <p className=" text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
              ratione quidem libero, praesentium ab atque? Quidem maxime,
              numquam dolores
            </p>
            <div>
              <p className="flex items-center gap-2">+1 (123) 456-7890</p>
              <p className="flex items-center gap-2 mt-2">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Quick Links</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <svg className="text-3xl hover:scale-105 duration-300" />
              <svg className="text-3xl hover:scale-105 duration-300" />
              <svg className="text-3xl hover:scale-105 duration-300" />
              <svg className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
              <img src={credit_card} alt="credit cards" class="w-[80%]" />
            </div>
          </div>
        </div>
        <p className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright © 2024 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
