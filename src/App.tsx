import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

const HomepageView = React.lazy(() => import("./views/HomePageView"));

const AboutUsView = React.lazy(() => import("./views/AboutUsView"));

const ContactUsView = React.lazy(() => import("./views/ContactUsView"));

const GalleryView = React.lazy(() => import("./views/GalleryView"));

const TestimonialView = React.lazy(() => import("./views/TestimonialView"));

const QuizView = React.lazy(() => import("./views/QuizView"));

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <HomepageView />
            </React.Suspense>
          }
        />
        <Route
          path="/aboutus"
          element={
            <React.Suspense fallback={<>...</>}>
              <AboutUsView />
            </React.Suspense>
          }
        />
        <Route
          path="/gallery"
          element={
            <React.Suspense fallback={<>...</>}>
              <GalleryView />
            </React.Suspense>
          }
        />
        <Route
          path="/contactus"
          element={
            <React.Suspense fallback={<>...</>}>
              <ContactUsView />
            </React.Suspense>
          }
        />
        <Route
          path="/quiz"
          element={
            <React.Suspense fallback={<>...</>}>
              <QuizView />
            </React.Suspense>
          }
        />
        <Route
          path="/testimonials"
          element={
            <React.Suspense fallback={<>...</>}>
              <TestimonialView />
            </React.Suspense>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
