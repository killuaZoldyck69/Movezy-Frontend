import React from "react";
import banner from "../../../assets/banner.jpg";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="relative">
      <div
        className="w-full h-[70vh] md:h-[90vh] lg:h-[70vh]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        {/* Gradient Overlay */}
        <div className=" absolute inset-0 bg-gradient-to-r from-black to-black/40" />

        {/* Banner Content */}
        <div className="md:w-2xl lg:w-7xl mx-auto">
          <div className="absolute text-white text-center md:text-left md:w-1/3 lg:w-1/4 h-full flex flex-col justify-center items-center md:items-start space-y-5">
            <h1 className="text-3xl lg:text-5xl text-white font-bold lg:leading-14">
              No.1 <span className="text-red-600">Courier Delivery </span>
              Service in Bangladesh
            </h1>
            <p className="text-base lg:text-xl">
              MoveZy Courier is the fastest courier service near you that
              ensures safe delivery of your product right on time.
            </p>
            <Button className="bg-red-600 h-10 w-40 hover:bg-red-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
