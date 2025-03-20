import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faChartBar,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <div
      className={`bg-gray-800 text-gray-200 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition duration-200 ease-in-out md:relative md:translate-x-0`}
    >
      <div className="flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-white">Kaadi</h1>
        {/* Close Button for Mobile */}
        <button
          onClick={onToggle}
          className="text-white focus:outline-none md:hidden"
        >
          ×
        </button>
      </div>
      <nav className="mt-10">
        <a
          href="/dashboard"
          className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
        >
          <FontAwesomeIcon icon={faHome} className="mr-3" />
          Dashboard
        </a>
        <a
          href="/profile"
          className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
        >
          <FontAwesomeIcon icon={faUser} className="mr-3" />
          Profile
        </a>
        <a
          href="/analytics"
          className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
        >
          <FontAwesomeIcon icon={faChartBar} className="mr-3" />
          Analytics
        </a>
        <a
          href="/settings"
          className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
        >
          <FontAwesomeIcon icon={faCog} className="mr-3" />
          Settings
        </a>
        <a
          href="/logout"
          className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
          Logout
        </a>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onToggle} // Close sidebar when clicking outside
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
