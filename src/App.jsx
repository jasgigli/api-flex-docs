import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Installation from "./pages/Installation";
import Usage from "./pages/Usage";
import ApiExamples from "./pages/ApiExamples";
import Caching from "./pages/Caching";
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

  return (
    <Router>
      <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          setIsOpen={setSidebarOpen}
          isOpen={sidebarOpen}
        />
        <div className="flex flex-1">
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
          <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 dark:text-white transition-all duration-300 ease-in-out">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/installation" element={<Installation />} />
              <Route path="/usage" element={<Usage />} />
              <Route path="/api-examples" element={<ApiExamples />} />
              <Route path="/caching" element={<Caching />} />
              <Route
                path="/express-integration"
                element={<ExpressIntegration />}
              />
              <Route path="/comparison" element={<Comparison />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
