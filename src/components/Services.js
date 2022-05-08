import React from "react";
import { AwardFill, CupFill, Truck } from "react-bootstrap-icons";
import Service from "./Service";

const Services = () => {
  return (
    <div
      className="flex flex-col h-90 justify-center items-center bg-white gap-4"
      id="services"
    >
      <h1 className="text-3xl font-semibold">Our Service</h1>
      <div className="flex flex-row gap-8">
        <Service name="Serve drinks" icon={<CupFill />} />
        <Service name="24/7 Delivery" icon={<Truck />} />
        <Service name="Quality Service" icon={<AwardFill />} />
      </div>
    </div>
  );
};

export default Services;
