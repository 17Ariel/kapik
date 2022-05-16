import React from "react";
import Coffe from "./Coffe";
const Products = () => {
  return (
    <div
      className="h-full py-4 lg:h-full xl:h-90 xxl:h-90 flex flex-col items-center justify-center bg-white gap-6"
      id="product"
    >
      <h1 className="text-3xl font-semibold">Featured Products</h1>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        <Coffe bg="/img/capuccino.jpg" name="Capuccino" price="P50.00" />
        <Coffe bg="/img/mocha.jpg" name="Mocha" price="P60.00" />
        <Coffe bg="/img/barako.jpeg" name="Barako" price="P35.00" />
        <Coffe bg="/img/espresso.jpeg" name="Espresso" price="P40.00" />
      </div>
    </div>
  );
};

export default Products;
