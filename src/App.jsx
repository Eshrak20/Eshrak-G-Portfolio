// import { BrowserRouter } from "react-router-dom";

// import {
//   About,
//   Contact,
//   Experience,
//   Education,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
//   Footer
// } from "./pages";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="absolute inset-0 bg-overlay-black"></div>{" "}
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <div>
//           <About />
//           <Tech />
//           <div className="relative z-0">
//             <StarsCanvas />
//             <Experience />
//           </div>
//           <Works />

//           <div className="relative z-0">
//             <StarsCanvas />
//             <Education />
//           </div>
//           <Feedbacks />
//         </div>
//         <div className="relative z-0">
//           <StarsCanvas />
//           <Contact />
//           <Footer/>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./pages/shared/Navbar";
import Footer from "./pages/shared/Footer";
const App = () => {
  useEffect(() => {
    // Ensure no horizontal scrolling
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);
  return (
    <div>
      {<Navbar></Navbar>}
        <Outlet></Outlet>
      {<Footer></Footer>}
    </div>
  );
};

export default App;