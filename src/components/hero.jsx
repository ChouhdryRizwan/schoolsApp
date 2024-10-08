import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-start justify-center text-white">
        <div className="container mx-auto px-4">
          <div className="md:w-1/2">
            <span className="text-gray-400 uppercase">SubHeadline</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2 mb-4">
              Enter Your <span className="text-purple-500">Headline Here</span>
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem eos ea, cum quae facilis optio impedit tempora aliquam at eveniet?
            </p>
            <div className="mt-5">
              <a
                href="#"
                className="inline-block bg-purple-500 text-white py-3 px-5 rounded-full hover:bg-white hover:text-black transition mt-3 sm:mt-0"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
