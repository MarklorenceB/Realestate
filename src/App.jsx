import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChoose";
import SuccessSection from "./components/Success";
import AgentIntro from "./components/Agent";
import Searchlisting from "./components/Searchlisting";
import PhotoGallery from "./components/Photogallery";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AgentIntro />
      <Stats />
      <SuccessSection />
      <Services />
      <Searchlisting />

      <PhotoGallery />

      <Contact />
      <Footer />
    </>
  );
}

export default App;
