import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import GrowingMoment from "./components/GrowingMoment";
import Testimonials from "./components/Testimonials";

const HomeComponent = () => {
  console.log("HomeComponent");
  return (
    <>
      <Header />
      <Banner />
      <AboutUs />
      <GrowingMoment />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  );
};

export default HomeComponent;
