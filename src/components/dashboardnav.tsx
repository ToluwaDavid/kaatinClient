import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  onMenuClick: () => void;
}

const DashboardNavbar: React.FC = ({}) => {
  return (
    <header className="bg-white shadow w-full">
      <div className="md:hidden"></div>
      <div className="flex justify-between items-center px-6 py-4">
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
        <h2 className="text-xl font-bold">Kaadi Dashboard</h2>
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-600 hover:text-gray-800"
            aria-label="Notifications"
          >
            <FontAwesomeIcon icon={faBell} className="text-xl" />
          </button>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <p className="ml-2 text-gray-700">John Doe</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
