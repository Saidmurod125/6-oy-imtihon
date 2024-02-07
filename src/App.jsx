import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Global.css";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import About from "./Pages/About ";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import Singer1 from "./Pages/Singer1";
import Sinig from "./Pages/Sinig";
import Loging from "./Pages/Loging";
import Navbar from "./Pages/Navbar";
import Futer from "./Pages/Futer";
import Stroy from "./Pages/Stroy";
function App() {
  return (
    <>
      <BrowserRouter>
        <header-top>
          <div className="sm:none container mx-auto mt-10 rounded-md bg-amber-700">
            <p className="p-3 text-center text-white ">
              Free Courses 🌟 Sale Ends Soon, Get It Now ➡
            </p>
          </div>
        </header-top>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Singer1" element={<Singer1 />} />
          <Route path="/Sinig" element={<Sinig />} />
          <Route path="/Loging" element={<Loging />} />
          <Route path="/Stroy" element={<Stroy />} />
        </Routes>
        <Futer />
      </BrowserRouter>
    </>
  );
}

export default App;
