import React from "react";
import { Link } from "react-router-dom";

const Header = ({ toggleDarkMode, darkMode, setIsOpen, isOpen }) => {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white shadow-md z-50 w-full transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Site Name */}
        <h1 className="text-2xl font-extrabold tracking-tight">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-300 transition-colors duration-300"
          >
            Api-Flex
          </Link>
        </h1>

        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button for Mobile */}
          <button
            className="block md:hidden text-2xl px-4 py-2 transform hover:scale-110 transition-transform duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>

          {/* Dark Mode Toggle */}
          <button
            className="bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full p-2 hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Navigation Links for Desktop */}
          <nav
            className={`md:flex ${
              isOpen ? "block" : "hidden"
            } md:flex-row md:space-x-8 space-y-4 md:space-y-0 absolute md:relative md:top-0 top-16 left-0 w-full md:w-auto bg-blue-700 md:bg-transparent p-4 md:p-0 z-50 shadow-lg md:shadow-none rounded-lg md:rounded-none transform transition-all duration-300 ease-in-out`}
          >
            {[
              "Home",
              "Installation",
              "Usage",
              "API Examples",
              "Caching",
              "Express Integration",
              "Comparison",
            ].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-lg font-medium hover:underline transition-all duration-300 hover:text-blue-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
