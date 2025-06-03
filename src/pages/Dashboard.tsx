import React from "react";
import { useState, useEffect } from "react"; //Hooks for managing state and side Effects
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //Component to display Icons
import {
  faUser,
  faEdit,
  faAddressBook,
  faCog,
  faSignOutAlt,
  faChevronLeft,
  faChevronCircleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; //Icon shapes
import Profile from "../components/Profile";
import Editprofile from "../components/Editprofile";
import Contact from "../components/Contact";
import Settings from "../components/Settings";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchProfile, logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../services/api";

//Define NavItems shapes and types
type NavItems = {
  id: string; //unique identifier ('Profile, editors, ')
  icon: typeof faUser; //Ensure that only valid icons are used
  label: string; //Displays texts (`Profile page etc`)
  component: React.ReactNode;
};

//Define interface for the dashboard component
interface DashboardContentProps {
  onNavigate?: (tab: string) => void;
}

const Dashboard = () => {
  //Use state declerations
  const [activeTab, setActiveTab] = useState<string>("profile"); //This is for swithcing components in the dashboard
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false); //This is for the opening and collapsing of the sidenavbar

  //Navbar Configuration
  const navItems: NavItems[] = [
    {
      id: "profile",
      icon: faUser,
      label: "Profile",
      component: <Profile />,
    },
    {
      id: "editcard",
      icon: faEdit,
      label: "Edit Profile",
      component: <Editprofile />,
    },
    // {
    //   id: "contacts",
    //   icon: faAddressBook,
    //   label: "Contacts",
    //   component: <Contact />,
    // },
    // {
    //   id: "setting",
    //   icon: faCog,
    //   label: "settings",
    //   component: <Settings />,
    // },
    {
      id: "logout",
      icon: faSignOutAlt,
      label: "logout",
      component: undefined,
    },
  ];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token || !isAuthenticated) {
      navigate("/login"); // Redirect if not logged in
      return;
    }

    dispatch(fetchProfile()); // Fetch the profile
  }, [dispatch, isAuthenticated]);

  // SIDE EFFECTS
  // Persist active tab in localstorage
  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) setActiveTab(savedTab);
  }, []);

  //Save active tabs
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token); // ✅ Restores token to Axios headers
      dispatch(fetchProfile()); // ✅ Fetch user data into Redux
    }
  }, []);

  // EFFECT HANDLING
  //Handle switching tabs
  const handleNavigation = (tabId: string) => {
    if (tabId === "logout") {
      dispatch(logout());
      navigate("/login");
      return;
    }
    setActiveTab(tabId);
  };
  //handle toggling of the navbar
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  //RENDER FUNCTIONALITY
  const renderActiveComponent = () => {
    const activeItem = navItems.find((item) => item.id === activeTab);
    return activeItem?.component;
    //return activeItem?.component || <Profile />;
  };
  return (
    <div className="flex h-screen bg-gray-50">
      {/* SIDEBAR */}
      <div
        className={`bg-primary shadow-lg transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Sidebar Header and Button */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          {!isCollapsed && (
            <h1 className="text-2xl font-bold text-white">
              K<span className="text-accent">aa</span>d
            </h1>
          )}
          <button
            onClick={toggleNavbar}
            className="text-white hover:text-accent transition-colors py-6"
            aria-label={isCollapsed ? "Expand Navbar" : "Collapse Navbar"}
          >
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronRight : faChevronLeft}
            />
          </button>
        </div>

        {/* Button for the sidenavbar */}
        <nav className="mt-4">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full text-white flex items-center p-3 mb-3 font-bold  transition-colors ${
                    activeTab === item.id
                      ? "bg-accent text-white"
                      : "text-gray-700 hover:bg-accent/10 hover:text-accent "
                  } ${isCollapsed ? "justify-center" : ""}`}
                  aria-current={activeTab === item.id ? "page" : undefined}
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={isCollapsed ? "" : "mr-3"}
                  />
                  {!isCollapsed && item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="mt-24 space-x-3">
          <ul>
            <li className="items-center p-3 mb-3 text-sm">
              <button className="text-sm font-semibold text-white">
                Welcome,&nbsp;
              </button>
              <button className="text-sm font-semibold text-white">
                {user?.firstname || "User"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {/* MAIN-NAVBAR CONTENT AREA */}
      <div className="flex-1 overflow-auto p-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">{renderActiveComponent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;

// import React, { useState } from "react";
// import Sidebar from "../components/sidebar";
// import Navbar from "../components/dashboardnav";

// const Dashboard: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar
//         isOpen={isSidebarOpen}
//         onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
//       />

//       {/* Main Content */}
//       <div className="flex flex-col flex-grow">
//         {/* Navbar */}
//         <Navbar />

//         {/* Content Area */}
//         <main className="flex-grow p-6">
//           <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Widgets */}
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-lg font-semibold mb-2">Profile Summary</h3>
//               <p className="text-gray-600">Quick overview of your profile.</p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-lg font-semibold mb-2">Analytics</h3>
//               <p className="text-gray-600">
//                 See data trends and usage statistics.
//               </p>
//             </div>
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
//               <p className="text-gray-600">
//                 Keep track of your recent actions.
//               </p>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
