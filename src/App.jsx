import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Feature from "./components/feature";
import SchoolSection from "./components/schoolSection";
import Stats from "./components/stats";
import Partner from "./components/partners";
import Hero from "./components/hero";
import Schools from "./pages/schools";
import Page from "./pages/page";
import SchoolDetail from "./pages/schooldetails"; // Import the SchoolDetail component
import Banner from "./components/banner";
import Footer from "./components/footer";
import AboutUs from "./components/about";

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
            {/* <AboutUs /> */}
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
            <Footer />
          </>
        }
      />
      <Route
        path="/school/:id"
        element={
          <>
            <SchoolDetail />
            <Footer />
          </>
        }
      />
      <Route
        path="/page"
        element={
          <>
            <Page />
          </>
        }
      />
    </Routes>
  </Router>
);

export default App;
