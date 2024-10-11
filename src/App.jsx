import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Feature from "./components/feature";
import SchoolSection from "./components/schoolSection";
import Stats from "./components/stats";
import Partner from "./components/partners";
import Hero from "./components/hero";
import Schools from "./pages/schools";
import Banner from "./components/banner";
import Footer from "./components/footer";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <SchoolSection />
            <Banner />
            <Stats />
            {/* <Partner /> */}
            <Footer />
          </>
        }
      />
      <Route
        path="/schools"
        element={
          <>
            <Schools />
            <Footer /> {/* Footer included on the schools page */}
          </>
        }
      />
    </Routes>
  </Router>
);

export default App;
