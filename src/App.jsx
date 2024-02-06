import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Global.css";
import Logo from "./image/logo.svg";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import About from "./Pages/About ";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import Singer from "./Pages/singer";
function App() {
  return (
    <>
      <BrowserRouter>
        <header-top>
          <div className="container mx-auto mt-10 rounded-md bg-amber-700">
            <p className="p-3 text-center text-white ">
              Free Courses 🌟 Sale Ends Soon, Get It Now ➡
            </p>
          </div>
        </header-top>

        <nav className="container mx-auto mb-28 flex items-center pr-5 ">
          <img src={Logo} alt="" />
          <Link
            className="ml-[57px] rounded-[8px] p-[10px] focus:bg-gray-200"
            to="/"
          >
            Home
          </Link>
          <Link
            className="ml-[26px] rounded-[8px] p-[10px]  focus:bg-gray-200"
            to="/Courses"
          >
            Courses
          </Link>
          <Link
            className="ml-[26px] rounded-[8px] p-[10px]  focus:bg-gray-200"
            to="/About"
          >
            About Us
          </Link>
          <Link
            className="ml-[26px] rounded-[8px] p-[10px] focus:bg-gray-200"
            to="/Pricing"
          >
            Pricing
          </Link>
          <Link
            className="ml-[26px] rounded-[8px] p-[10px]    focus:bg-gray-200"
            to="/contact"
          >
            Contact
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Singer" element={<Singer />} />
        </Routes>
        <footer className="container mx-auto  mt-[150px] flex h-[342px]  w-[100%] rounded-[12px] bg-white">
          <div className="ml-[250px] mt-[50px]">
            <img src={Logo} alt="" />
            <br />
            <p>✉ hello@skillbridge.com</p>
            <br />
            <p>📞 +91 91813 23 2309</p>
            <br />
            <p>🏳 Somewhere in the World</p>
          </div>
          <div className=" ml-[300px] flex">
            <div className="ml-[50px] mt-[50px] ">
              <h2 className="md:font-bold">Home</h2>
              <br />
              <p>Benefits</p>
              <br />
              <p>Our Courses</p>
              <br />
              <p>Our Testimonials</p>
              <br />
              <p>Our FAQ</p>
            </div>
            <div className="ml-[50px] mt-[50px] ">
              <h2 className="md:font-bold">About Us</h2>
              <br />
              <p>Company</p>
              <br />
              <p>Achievements</p>
              <br />
              <p>Our Goals</p>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
