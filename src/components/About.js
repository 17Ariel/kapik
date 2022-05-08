import React from "react";

const About = () => {
  return (
    <div
      className="h-90  flex flex-row gap-40 justify-center items-center bg-gray-50"
      id="about"
    >
      <img src="/img/cover.png" alt="coffee-bg" className="h-72 w-72" />
      <div className="flex justify-center items-center flex-col h-72 w-96">
        <h1 className="text-3xl font-semibold">
          About <span className="text-primary-0">Us</span>
        </h1>
        <p className="text-lg leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          dignissimos, corrupti cumque magni praesentium hic debitis commodi
          consequuntur atque ipsa sunt facere non labore. Inventore repudiandae
          incidunt ipsam iusto dolorum.
        </p>
      </div>
    </div>
  );
};

export default About;
