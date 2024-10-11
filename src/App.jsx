import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Feature from "./components/feature";
import SchoolSection from "./components/schoolSection";
import Stats from "./components/stats";
import Partner from "./components/partners";
import Hero from "./components/hero";
import Schools from "./pages/schools";

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
            <Stats />
            <Partner />
          </>
        }
      />
      <Route path="/schools" element={<Schools />} />
    </Routes>
  </Router>
);

export default App;
