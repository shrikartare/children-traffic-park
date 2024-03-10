import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageView from "./views/HomePageView";
import AboutUsView from "./views/AboutUsView";
import ContactUsView from "./views/ContactUsView";
import GalleryView from "./views/GalleryView";
import QuizView from "./views/QuizView";
import TestimonialView from "./views/TestimonialView";

const App = () => {
  return (
    <BrowserRouter basename="/children-traffic-park">
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/aboutus" element={<AboutUsView />} />
        <Route path="/gallery" element={<GalleryView />} />
        <Route path="/contactus" element={<ContactUsView />} />
        <Route path="/quiz" element={<QuizView />} />
        <Route path="/testimonials" element={<TestimonialView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
