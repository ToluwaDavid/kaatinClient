import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbarnew: React.FC = () => {
  return (
    <>
      <main className="bg-primary  flex justify-between px-12 py-4 text-white">
        <div className="flex gap-5">
          <div className="text-4xl font-bold">
            <Link to="/newnav">
              K<span className="text-accent">ati</span>n
            </Link>
          </div>
          <nav className="flex gap-6 text-white items-center py-3 font-semibold ">
            <Link to="/" className="hover:text-accent transition duration-300">
              About
            </Link>
            <Link to="/" className="hover:text-accent transition duration-300">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex gap-6 py-3 font-semibold">
          <Link to="/">Login</Link>
          <Link to="/">Register</Link>
        </div>
      </main>
    </>
  );
};

export default Navbarnew;
