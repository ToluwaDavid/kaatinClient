import React from "react";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faMobileAlt,
  faRocket,
  faShareAlt,
  faSignInAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>

      {/* Hero Section */}
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
          className="bg-accent text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 transition duration-300 shadow-lg"
        >
          Get Started
        </Link>
      </div>

      {/* How It Works Section */}
      <section
        className=" bg-gray-100 py-16"
        // style={{ backgroundImage: "url('/doodle-bg.svg')" }}
      >
        <div className="container mx-auto px-6 py-24 lg:px-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="bg-accent/10 p-4 rounded-full inline-block mb-4">
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  size="2x"
                  className="text-accent"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                1. Register
              </h3>
              <p className="text-gray-600">Sign up in under 30 seconds.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="bg-accent/10 p-4 rounded-full inline-block mb-4">
                <FontAwesomeIcon
                  icon={faEdit}
                  size="2x"
                  className="text-accent"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                2. Customize
              </h3>
              <p className="text-gray-600">
                Set up and personalize your card with ease.
              </p>
            </div>

            {/* <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faEdit}
                size="3x"
                className="text-accent mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                2. Customize
              </h3>
              <p className="text-gray-600 py-3">
                Set up and personalize your card with ease.
              </p>
            </div> */}

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="bg-accent/10 p-4 rounded-full inline-block mb-4">
                <FontAwesomeIcon
                  icon={faShareAlt}
                  size="2x"
                  className="text-accent"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">3. Share</h3>
              <p className="text-gray-600">
                Share your card online or offline with anyone.
              </p>
            </div>

            {/* 
            <div className="flex flex-col items-center">
              <FontAwesomeIcon
                icon={faShareAlt}
                size="3x"
                className="text-accent mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">3. Share</h3>
              <p className="text-gray-600 py-3">
                Share your card online or offline with anyone.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 py-24 lg:px-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">
            Why you should choose K<span className="text-accent">aa</span>d?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <FontAwesomeIcon
                  icon={faRocket}
                  size="2x"
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Zero Setup Time
              </h3>
              <p className="text-gray-600 text-center">
                Go from signup to sharing in{" "}
                <span className="font-semibold">under 1 minute</span>.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-xl hover:shadow-md shadow-sm transition duration-300">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <FontAwesomeIcon
                  icon={faUsers}
                  size="2x"
                  className="text-primary"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-700">
                Networking Made Easy
              </h3>
              <p className="text-gray-600 text-center py-3">
                Share your card with anyone, anywhere, at any time.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white p-8 rounded-xl hover:shadow-md shadow-sm transition duration-300">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  size="2x"
                  className="text-primary"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-700">
                Mobile-Friendly
              </h3>
              <p className="text-gray-600 text-center py-3">
                Access and share your card from any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-24 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-8">
          Create your virtual business card today and stand out!
        </p>
        <a
          href="/register"
          className="bg-accent px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 transition duration-300"
        >
          Get Started
        </a>
      </section> */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Create your virtual business card today and stand out!
          </p>
          <Link
            to="/register"
            className="bg-accent hover:bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-bold transition duration-300 shadow-lg animate-pulse"
          >
            Create Your Card Now →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
