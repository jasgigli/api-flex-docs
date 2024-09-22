import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Installation from "./pages/Installation";
import Usage from "./pages/Usage";
import ApiExamples from "./pages/ApiExamples";
import ExpressIntegration from "./pages/ExpressIntegration";
import Comparison from "./pages/Comparison";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen`}>
        {/* Header Component */}
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          setIsOpen={setSidebarOpen}
          isOpen={sidebarOpen}
        />

        <div className="flex flex-1">
          {/* Sidebar Component */}
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

          {/* Main Content */}
          <main
            className={`flex-1 p-6 bg-gray-100 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out`}
            style={{
              marginLeft: sidebarOpen ? "16rem" : "0",
              overflowY: "auto", // Enable scrolling for the main content
              height: "calc(100vh - 64px)", // Adjust height based on header height
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/installation" element={<Installation />} />
              <Route path="/usage" element={<Usage />} />
              <Route path="/api-examples" element={<ApiExamples />} />
              <Route
                path="/express-integration"
                element={<ExpressIntegration />}
              />
              <Route path="/comparison" element={<Comparison />} />
            </Routes>
          </main>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
