import React from "react";
import Coffe from "./Coffe";
import capuccino from "../assets/capuccino.jpg";
import mocha from "../assets/mocha.jpg";
import baracko from "../assets/barako.jpeg";
import espresso from "../assets/espresso.jpeg";

const Products = () => {
  return (
    <div
      className="h-full py-4 lg:h-full xl:h-90 xxl:h-90 flex flex-col items-center justify-center bg-white gap-6"
      id="product"
    >
      <h1 className="text-3xl font-semibold">Featured Products</h1>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        <Coffe bg={capuccino} name="Capuccino" price="P50.00" />
        <Coffe bg={mocha} name="Mocha" price="P60.00" />
        <Coffe bg={baracko} name="Barako" price="P35.00" />
        <Coffe bg={espresso} name="Espresso" price="P40.00" />
      </div>
    </div>
  );
};

export default Products;
