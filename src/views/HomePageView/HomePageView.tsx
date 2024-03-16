import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import GrowingMoment from "./components/GrowingMoment";
import Testimonials from "./components/Testimonials";
import Infosection from "./components/InfoSection";

const HomeComponent = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <Infosection />
      <GrowingMoment />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomeComponent;
