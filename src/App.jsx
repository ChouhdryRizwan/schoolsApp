import React from "react";
import Navbar from "./components/navbar";
import Feature from "./components/feature";
import Stats from "./components/stats";
import Partner from "./components/partners";
import Hero from "./components/hero";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Feature />
    <Stats />
    <Partner />
  </>
);

export default App;
