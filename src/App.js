import React from "react";
import Navbar from "./components/Navbar/Navbar";       
import HeroSection from "./components/Hero/Hero"; 
import Footer from "./components/Footer/Footer";       
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
