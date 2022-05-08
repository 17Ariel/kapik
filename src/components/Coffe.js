import React from "react";

const Coffe = ({ name, price, bg }) => {
  return (
    <div className="w-64 h-72 shadow-md rounded-sm text-dark-0 flex flex-col gap-8">
      <img src={bg} alt="coffee-img" />
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-lg">{price}</p>
      </div>
    </div>
  );
};

export default Coffe;
