import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import GrowingMoment from "./components/GrowingMoment";
import Testimonials from "./components/Testimonials";
import Nursery from "./components/Nursery";

const HomeComponent = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Nursery />
      <GrowingMoment />
      <Gallery />
      <Testimonials />    
      <Footer />
    </>
  );
};

export default HomeComponent;