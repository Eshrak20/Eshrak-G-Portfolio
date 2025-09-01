import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Works from "./Works";
import Education from "./Education";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import Tech from "./Tech";


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Tech/>
      <Experience/>
      <Works/>
      <Education />
      <Feedbacks/>
      <Contact />
    </div>
  );
};

export default Home;
