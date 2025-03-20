import {
  faSignInAlt,
  faEdit,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Howitworks = () => {
  return (
    <div className=" bg-gray-100 py-16">
      <div className="container mx-auto px-6 py-24 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faSignInAlt}
              size="3x"
              className="text-accent mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700">1. Register</h3>
            <p className="text-gray-600 py-3">
              Create your account in just a few minutes.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center">
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
          </div>
          {/* Step 3 */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
