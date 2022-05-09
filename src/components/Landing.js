import React from "react";

const Landing = () => {
  return (
    <div
      className="flex items-center flex-col bg-coverimg bg-cover bg-fixed bg-center h-90 opacity-95 text-white gap-2"
      id="home"
    >
      <h1 className="mt-10 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl xxl:text-5xl">
        Welcome to Capik
      </h1>
      <p className="text-md md:text-md lg:text-xl xl:text-xl xxl:text-xl">
        Where coffee is for everyone
      </p>
    </div>
  );
};

export default Landing;
