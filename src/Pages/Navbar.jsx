import { Link } from "react-router-dom/dist";
import Logo from "../image/logo.svg";
const Navbar = () => {
  return (
    <nav className="container mx-auto mt-5 flex justify-between">
      <div className="mb-28 flex items-center pr-5">
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
          to="/Contact"
        >
          Contact
        </Link>
      </div>
      <div className="flex h-[55px]  w-[214px]  ">
        <Link
          to="/Sinig"
          className="   h-[55px] w-[117px] justify-center rounded-full border  pt-3 text-center hover:bg-orange-200 hover:text-white"
        >
          Sign Up
        </Link>
        <Link
          to="/Loging"
          className="h-[55px] w-[117px] justify-center rounded-full border  pt-3 text-center hover:bg-orange-200 hover:text-white "
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
