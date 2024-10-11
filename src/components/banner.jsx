import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full h-[400px] bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url('https://img.lovepik.com/background/20211022/medium/lovepik-school-season-flat-cartoon-poster-banner-background-image_605654048.jpg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>{" "}
      {/* 50% black overlay */}
      {/* Content with background and shadow */}
      <div className="relative text-center p-12 bg-white/30 backdrop-blur-md rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white drop-shadow-lg">
          International School of World
        </h1>
        <button
          className="bg-purple-500 text-white px-4 py-2 mt-4 rounded-lg border-2 border-transparent hover:bg-white hover:text-black hover:border-purple-500 transition duration-200"
        >
          Visit Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
