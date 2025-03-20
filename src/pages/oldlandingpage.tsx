// src/pages/LandingPage.tsx
import React from "react";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faMobileAlt,
  faRocket,
  faShareAlt,
  faSignInAlt,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer";

const Landing: React.FC = () => {
  return (
    <div className="">
      <div className=" ">
        <div className="md:p-2 bg-primary text-textPrimary">
          {/* Navabr */}
          <div className="mb-12">
            <Navbar />
          </div>

          {/* <div className="mb-8 text-4xl font-bold">
          K<span className="text-accent">aa</span>di
        </div> */}

          {/* spacer div */}
          <div className="mt-12">&nbsp;</div>

          {/* HERO div */}
          <div className="py-1">
            {/* Main text */}
            <div className="md:mt-12">
              <h1 className="text-center text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Your business card should be{" "}
                <span className="text-accent">available</span>
                <br />
                both <span className="text-lightBlue">online</span> &{" "}
                <span className="text-accent">on-the-go</span>
              </h1>
            </div>
            {/* Description */}
            <p className="text-center mt-4 text-lg md:text-xl max-w-md mx-auto text-gray-200">
              Ceate your virtual business card now!
            </p>
            {/* Call to Action */}
            <div className="text-center mt-8">
              <a
                href="/register"
                className="bg-accent text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-orange-500 transition duration-300"
              >
                Get Started
              </a>
            </div>
            {/* Image of a hand holding a paycheck */}
            <div className="mt-12">
              {/* <img
                src="/path/to/hand-holding-check.png"
                alt="Hand holding paycheck"
                className="mx-auto max-w-xs md:max-w-md"
              /> */}
            </div>
          </div>
          {/* END OF HERO div */}
        </div>

        {/* HOW TO div */}
        {/* <h1 className="text-center font-bold mt-24  mb-16 text-6xl md:text-3xl text-primary ">
          Very easy to use and setup...
        </h1> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:pl-24 md:pr-24 md:mb-16">
        
          <div className="flex items-center  gap-6">
            <FontAwesomeIcon
              icon={faUserPlus}
              size="3x"
              className="text-accent"
            />
            <div>
              <h3 className="font-bold text-gray-700 ">Register and SignUp</h3>
              <p className="text-gray-600">
                Create an account in less than 4 mins
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="3x"
              className="text-accent"
            />

            <div>
              <h3 className="font-bold text-gray-700">Set Up Your Card</h3>
              <p className="text-gray-600">Setup or edit existing Card</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <FontAwesomeIcon
              icon={faAddressCard}
              size="3x"
              className="text-accent"
            />

            <div>
              <h3 className=" font-bold text-gray-700">Share your Card</h3>
              <p className="text-gray-600">Share your card with everyone!</p>
            </div>
          </div>
        </div> */}
        {/* END OF HOW TO div */}

        {/* How it works div */}
        <section className="py-16  mt-7 mb-7">
          <div className="container mx-auto px-6 lg:px-16 text-center">
            <h2 className="text-3xl font-bold mb-12 text-primary">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  size="3x"
                  className="text-accent mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700">
                  1. Register
                </h3>
                <p className="text-gray-600">
                  Create your account in just a few minutes.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faEdit}
                  size="3x"
                  className="text-accent mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700">
                  2. Customize
                </h3>
                <p className="text-gray-600">
                  Set up and personalize your card with ease.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faShareAlt}
                  size="3x"
                  className="text-accent mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700">
                  3. Share
                </h3>
                <p className="text-gray-600">
                  Share your card online or offline with anyone.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* How it works div end  */}

        {/* BENEFITS div */}
        <div>
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-16 text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-700">
                Why Choose K<span className="text-accent">aa</span>di?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faRocket}
                    size="3x"
                    className="text-primary mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-700">
                    Fast Setup
                  </h3>
                  <p className="text-gray-600">
                    Set up your virtual card in minutes without any hassle.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faUsers}
                    size="3x"
                    className="text-primary mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-700">
                    Networking Made Easy
                  </h3>
                  <p className="text-gray-600">
                    Share your card with anyone, anywhere, at any time.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faMobileAlt}
                    size="3x"
                    className="text-primary mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-700">
                    Mobile-Friendly
                  </h3>
                  <p className="text-gray-600">
                    Access and share your card from any device.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* END OF BENEFITS div */}

        {/* Testimonials div  */}
        {/* <section className="py-16">
          <div className="container mx-auto px-6 lg:px-16 text-center">
            <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-gray-600 italic">
                  "Kaadi has revolutionized how I share my contact information.
                  Highly recommend!"
                </p>
                <h4 className="text-lg font-semibold mt-4">
                  – John Doe, Freelancer
                </h4>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-gray-600 italic">
                  "The ease of use and customization options are amazing!"
                </p>
                <h4 className="text-lg font-semibold mt-4">
                  – Sarah Johnson, Business Owner
                </h4>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-gray-600 italic">
                  "I can’t imagine networking without my Kaadi card now. It's
                  perfect!"
                </p>
                <h4 className="text-lg font-semibold mt-4">
                  – Michael Lee, Consultant
                </h4>
              </div>
            </div>
          </div>
        </section> */}

        {/* Testimonials div end  */}

        {/* Call to action div   */}
        <section className="py-24 bg-primary text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 p-4">
            Create your virtual business card today and stand out!
          </p>
          <a
            href="/register"
            className="bg-accent px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-500 transition duration-300"
          >
            Get Started
          </a>
        </section>
        {/* Call to action div end  */}

        {/* FAQ div  */}
        {/* <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold">What is Kaadi?</h3>
                <p className="text-gray-600">
                  Kaadi is a virtual business card platform that allows you to
                  share your contact information online and on-the-go.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Is it free to use?</h3>
                <p className="text-gray-600">
                  Yes! You can start using Kaadi for free. Premium features are
                  available with a paid subscription.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* FAQs div end  */}
        {/* Footer */}
        <Footer />
        {/* Footer ends */}
      </div>
    </div>
  );
};

export default Landing;

// import React from "react";
// import { Link } from "react-router-dom";

// const Landing: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold">Welcome to Business Card Manager</h1>
//         <p className="mt-4">Create and manage your business cards online.</p>
//         <div className="mt-6">
//           <Link
//             to="/login"
//             className="px-4 py-2 bg-blue-500 text-white rounded-md"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md"
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;
