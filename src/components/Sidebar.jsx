import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg w-64 space-y-6 px-4 py-6 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex items-center justify-between mb-6">
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
      <nav className="mt-4 space-y-4">
        {[
          { path: "/", name: "Home" },
          { path: "/installation", name: "Installation" },
          { path: "/usage", name: "Usage" },
          { path: "/api-examples", name: "API Examples" },
          { path: "/caching", name: "Caching" },
          { path: "/express-integration", name: "Express Integration" },
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
      </nav>
    </aside>
  );
};

export default Sidebar;
