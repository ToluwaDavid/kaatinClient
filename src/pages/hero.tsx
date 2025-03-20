import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="text-center py-32 px-4 bg-primary text-white">
        <h1 className="text-3xl md:text-6xl font-bold md:mb-10 mb-5  leading-tight">
          Your business card should be{" "}
          <span className="text-accent">available</span>
          <br />
          both <span className="text-lightBlue">online</span> &{" "}
          <span className="text-accent">on-the-go</span>
        </h1>
        <p className="text-base md:text-2xl md:py-12 sm:py-6  max-w-xl mx-auto mb-8">
          Create your virtual business card now!
        </p>
        <Link
          to="/register"
          className="bg-accent text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Hero;
