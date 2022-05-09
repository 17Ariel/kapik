import React from "react";

const About = () => {
  return (
    <div
      className="h-full py-4 lg:h-90 xl:h-90 xxl:h-90 gap-4 sm:gap:36 md:gap:36 lg:gap-40 xl:gap-40 xxl:gap-40 flex flex-col md:flex-col lg:flex-row xl:flex-row xxl:flex-row justify-center items-center bg-gray-50"
      id="about"
    >
      <img
        src="/img/cover.png"
        alt="coffee-bg"
        className=" h-36 w-36 sm:h-72 sm:w-72 lg:h-72 lg:w-72 xl:h-72 xl:w-72 xxl:h-72 xxl:w-72"
      />
      <div className="flex justify-center items-center flex-col h-72 w-72 sm:w-80 md:w-80 lg:w-96 xl:w-96 xxl:w-96">
        <h1 className="text-3xl font-semibold">
          About <span className="text-primary-0">Us</span>
        </h1>
        <p className="md:text-lg lg:text-xl xl:text-lg xxl:text-lg leading-7">
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
