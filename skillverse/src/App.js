import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Cousesall from "./components/Cousesall";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import RoboCHAMPS from "./components/RoboCHAMPS";
import Python from "./components/Python";
import DemoPage from "./pages/Demo";



import AppDevelopment from "./components/AppDevelopment";
import Cybersecurity from "./components/Cybersecurity";
import Mathematics from "./components/Mathematics";

import "./App.css";

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
                <About />
                <Cousesall />
                <TestimonialsSection />
                <Faq />
              </>
            }
          />
          <Route path="/robochamps" element={<RoboCHAMPS />} />
          <Route path="/python" element={<Python />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/courses" element={<Cousesall />} /> 

         
          <Route path="/appdevelopment" element={<AppDevelopment />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/mathematics" element={<Mathematics />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
