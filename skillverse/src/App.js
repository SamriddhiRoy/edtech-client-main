// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Demo from "./components/Demo";
import Cousesall from "./components/cousesall";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import RoboCHAMPS from "./components/RoboCHAMPS";
import "./App.css";
import DemoPage from "./pages/Demo";


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
                <Cousesall />
                <TestimonialsSection />
                <Faq/>
               
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
