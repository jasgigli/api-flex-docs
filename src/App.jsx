import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Installation from "./pages/Installation";
import ApiExamples from "./pages/ApiExamples";
import Caching from "./pages/Caching";
import ExpressIntegration from "./pages/ExpressIntegration";
import Comparison from "./pages/Comparison";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "installation":
        return <Installation />;
      case "usage":
        return <Usage />;
      case "api-examples":
        return <ApiExamples />;
      case "caching":
        return <Caching />;
      case "express-integration":
        return <ExpressIntegration />;
      case "comparison":
        return <Comparison />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header setPage={setPage} />
      <main className="main-content">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
