import React from "react";

const Header = ({ setPage }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>api-flex Documentation</h1>
        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("installation")}>Installation</button>
          <button onClick={() => setPage("usage")}>Usage</button>
          <button onClick={() => setPage("api-examples")}>API Examples</button>
          <button onClick={() => setPage("caching")}>Caching</button>
          <button onClick={() => setPage("express-integration")}>
            Express Integration
          </button>
          <button onClick={() => setPage("comparison")}>Comparison</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
