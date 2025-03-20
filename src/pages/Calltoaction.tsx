import React from "react";
import { Link } from "react-router-dom";

const Calltoaction = () => {
  return (
    <section className="py-24 bg-primary text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Ready to Get Started?</h2>
      <p className="text-base md:text-lg max-w-xl mx-auto mb-12">
        Create your virtual business card today and stand out!
      </p>
      <Link
        to="/register"
        className="bg-accent px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 transition duration-300"
      >
        Get Started
      </Link>
    </section>
  );
};

export default Calltoaction;
