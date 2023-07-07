import React from "react";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Contact from "./Contact";
import Header from "./Header";
import Pricing from "./Pricing";
import Quote from "./Quote";

const Homepage = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Pricing />
      <Quote />
      <Team />
    </div>
  );
};

export default Homepage;
