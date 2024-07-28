// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Demo from "./components/Demo";
import HomePage from "./components/HomePage";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import RoboCHAMPS from "./components/RoboCHAMPS";
import "./App.css";
import DemoPage from "./pages/DemoPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Demo />
                <HomePage />
                <TestimonialsSection />
              </>
            }
          />
          <Route path="/robochamps" element={<RoboCHAMPS />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
