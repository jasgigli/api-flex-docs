import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-900 shadow-lg w-64 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:z-auto`}
      style={{ overflowY: "auto" }} // Enable scrolling for the sidebar
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 mb-6 md:hidden">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Menu
        </h2>
        <button
          className="text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          ✖️
        </button>
      </div>

      {/* Navigation Links with Scrollable Container */}
      <nav className="h-full overflow-y-auto px-4 space-y-4">
        {[
          { path: "/", name: "Introduction" },
          { path: "/installation", name: "Installation" },
          { path: "/usage", name: "Examples" },
          { path: "/api-examples", name: "API's" },
          { path: "/express-integration", name: "Express" },
          { path: "/comparison", name: "Comparison" },
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 dark:hover:bg-blue-600"
            onClick={() => setIsOpen(false)}
          >
            <span className="ml-3">{item.name}</span>
          </Link>
        ))}

        {/* Advanced Concepts with Submenu */}
        <div className="mt-4">
          <button
            onClick={() => toggleMenu("advanced")}
            className="flex items-center w-full p-2 rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 dark:hover:bg-blue-600"
          >
            <span className="ml-3">Advanced Concepts</span>
            <span className="ml-auto">
              {activeMenu === "advanced" ? "▲" : "▼"}
            </span>
          </button>
          {activeMenu === "advanced" && (
            <div className="pl-6 mt-2 space-y-2">
              {[
                { path: "/advanced/hooks", name: "Custom Hooks" },
                { path: "/advanced/middleware", name: "Middleware" },
                { path: "/advanced/error-handling", name: "Error Handling" },
                { path: "/advanced/security", name: "Security" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-blue-400 hover:text-white text-gray-700 dark:text-gray-300 dark:hover:bg-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Configuration Section */}
        <Link
          to="/configuration"
          className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 dark:hover:bg-blue-600"
          onClick={() => setIsOpen(false)}
        >
          <span className="ml-3">Configuration</span>
        </Link>

        {/* Testing Section */}
        <Link
          to="/testing"
          className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 dark:hover:bg-blue-600"
          onClick={() => setIsOpen(false)}
        >
          <span className="ml-3">Testing</span>
        </Link>

        {/* Community Section with Submenu */}
        <div className="mt-4">
          <button
            onClick={() => toggleMenu("community")}
            className="flex items-center w-full p-2 rounded-lg transition-all duration-200 hover:bg-blue-500 hover:text-white text-gray-700 dark:text-gray-300 dark:hover:bg-blue-600"
          >
            <span className="ml-3">Community</span>
            <span className="ml-auto">
              {activeMenu === "community" ? "▲" : "▼"}
            </span>
          </button>
          {activeMenu === "community" && (
            <div className="pl-6 mt-2 space-y-2">
              {[
                { path: "/community/forum", name: "Forum" },
                { path: "/community/contributing", name: "Contributing" },
                { path: "/community/blogs", name: "Blogs" },
                { path: "/community/meetups", name: "Meetups" },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center p-2 rounded-lg transition-all duration-200 hover:bg-blue-400 hover:text-white text-gray-700 dark:text-gray-300 dark:hover:bg-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
