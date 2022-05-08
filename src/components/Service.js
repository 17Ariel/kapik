import React from "react";

const Service = ({ name, icon }) => {
  return (
    <div className="w-64 h-72 shadow-md rounded-sm text-dark-0 flex flex-col justify-center items-center gap-8">
      <i className="text-primary-0 text-5xl">{icon}</i>
      <h1 className="text-xl font-semibold">{name}</h1>
    </div>
  );
};

export default Service;
