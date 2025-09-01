import React from "react";

import { Contact, Education, Experience, Feedbacks, Hero, Tech, Works } from "..";
import About from "./About";

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
