import React from "react";
import BgImage from "../../assets/coffee-cover.jpg";
import app_store from "../../assets/website/app_store.png";
import play_store from "../../assets/website/play_store.png";


const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl"
        style={bgImage}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-4xl font-semibold">
              Download the app
            </h1>
            <p className="text-center sm:px-20">
              Lorem ipsum dolor sit amet consedolor sit amet consectetur
              adipisicing elit. Officiis{" "}
            </p>
            <div className="flex justify-center items-center gap-4">
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={app_store} alt="" />
              </a>
              <a
                href="#"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              >
                <img src={play_store} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
