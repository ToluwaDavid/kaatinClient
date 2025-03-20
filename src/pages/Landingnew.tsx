import React from "react";
import Navbarnew from "../components/navbarnew";
import Hero from "./hero";
import Howitworks from "./Howitworks";
import Footer from "../components/footer";
import Calltoaction from "./Calltoaction";

const Landingnew: React.FC = () => {
  return (
    <>
      <Navbarnew />
      <Hero />
      <Howitworks />
      <Calltoaction />
      <Footer />
    </>
  );
};

export default Landingnew;
