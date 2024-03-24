// Import necessary dependencies
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Dashboard from "./dashboard/Dashboard";
import TopbarAdmin from "./components/TopbarAdmin/index.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { LayoutProvider } from "./context/useLayoutContext.jsx";

// Define the App component
function App() {
  return (
    <LayoutProvider>
      <Router>
        {" "}
        {/* Wrap the entire application with Router component */}
        <Navbar />
        <TopbarAdmin />
        <Dashboard />
        <Footer />
        <BackToTop />
      </Router>
    </LayoutProvider>
  );
}

// Export the App component
export default App;
