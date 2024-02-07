import { Link, NavLink } from "react-router-dom";
import logo from "./img/icon/AbstractLine.png";

import icon1 from "./img/icon/Icon (1).png";
import icon2 from "./img/icon/Icon (2).png";
import icon3 from "./img/icon/Icon (3).png";

import zapier from "./img/com/zapier.png";
import adobe from "./img/com/adobe.png";
import amazon from "./img/com/amazon.png";
import netflex from "./img/com/netflex .png";
import Notion from "./img/com/Notion.png";
import soptify from "./img/com/soptify.png";
import zoom from "./img/com/zoom.png";
import Plan from "./Plan";
import Nefk from "./Nefk";
import Obj from "./Obj";
const Home = () => {
  return (
    <main className="container mx-auto">
      <section className="container mx-auto ">
        <div className="mx-auto mt-28 h-[337px]  w-[965px]">
          <div className="mx-auto flex flex-wrap items-center justify-between ">
            <div className=" mx-auto flex h-[100px]  w-[854px] items-center justify-center rounded-xl  bg-white">
              <div className=" relative left-[-255px]  top-[-55px] h-11 w-10">
                <img className="h-[43px] w-[39px] " src={logo} alt="" />
              </div>
              <img
                className="h-[43px] w-[39px] bg-orange-200"
                src={icon1}
                alt=""
              />
              <h2 className="flex gap-3 font-sans text-2xl font-semibold text-black ">
                <span className=" text-amber-400"> Unlock </span> Your Creative
                Potential
              </h2>
            </div>
            <h2 className=" mx-auto mt-5 h-[57]  text-[40px]">
              with Online Design and Development Courses.
            </h2>
            <p className=" mt-5 h-[57] w-[965px]  text-center  text-[20px]">
              Learn from Industry Experts and Enhance Your Skills.
            </p>
            <div className="mt-12 flex w-[965px]  items-center justify-center gap-5">
              <NavLink
                to="/"
                className="h-16 w-[195px] rounded-xl  border  py-4 text-center  hover:bg-orange-500 hover:text-white"
              >
                Explore Courses
              </NavLink>
              <NavLink
                to="/"
                className="h-16 w-[195px] rounded-xl border py-4  text-center   hover:bg-orange-500 hover:text-white"
              >
                View Pricing
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto w-full items-center justify-center">
        <div className="container mx-auto mt-10 flex flex-wrap items-center justify-between ">
          <div className="mx-auto flex flex-wrap items-center justify-center gap-3 rounded-xl border bg-white p-8 ">
            <div className="flex items-center justify-center border-r pr-10 ">
              <img src={zapier} alt="" />
            </div>
            <div className="item">
              <img src={soptify} alt="" />
            </div>
            <div className="item">
              <img src={zoom} alt="" />
            </div>
            <div className="item">
              <img src={amazon} alt="" />
            </div>
            <div className="item">
              <img src={adobe} alt="" />
            </div>
            <div className="item">
              <img src={Notion} alt="" />
            </div>
            <div className="item no">
              <img src={netflex} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="video container mx-auto">
        <img src={icon2} alt="" />
      </section>
      <section className="container mx-auto">
        <div className="e m-auto mr-5 w-full pr-20 pt-3 ">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-full flex-col flex-wrap gap-3">
              <h2 className="text-left text-2xl font-semibold">Benefits</h2>
              <p className=" h-12  w-[933px]">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
              <div className="  h-10 w-[95px] items-end self-end rounded-xl border py-2  text-center   hover:bg-orange-500 hover:text-white">
                <Link to="/About"> View all</Link>
              </div>
            </div>
            <div className="flex w-full flex-wrap gap-3">
              <div className="flex flex-wrap items-center justify-center gap-7 py-6">
                <div className="flex w-[40%] flex-col flex-wrap items-center justify-center gap-5 rounded-2xl bg-white p-3">
                  <div className="flex flex-col flex-wrap items-center justify-center gap-8">
                    <h3 className="w-96 text-xl font-semibold "> 01</h3>
                  </div>
                  <div className="ml-3 flex flex-col flex-wrap items-center justify-center gap-8 ">
                    <h2 className="w-full text-start text-lg font-semibold">
                      Flexible Learning Schedule
                    </h2>
                    <p className="w-96 text-sm">
                      Fit your coursework around your existing commitments and
                      obligations.
                    </p>
                  </div>
                  <Link
                    className="ml-96 mr-3 flex w-14 flex-wrap items-center justify-center gap-2 rounded-md border bg-slate-100 p-4 hover:bg-orange-500"
                    to="/About"
                  >
                    <img src={icon3} alt="" />
                  </Link>
                </div>
                <div className="flex w-[40%] flex-col flex-wrap items-center justify-center gap-5 rounded-2xl bg-white p-3">
                  <div className="flex flex-col flex-wrap items-center justify-center gap-8">
                    <h3 className="w-96 text-xl font-semibold "> 02</h3>
                  </div>
                  <div className="ml-3 flex flex-col flex-wrap items-center justify-center gap-8 ">
                    <h2 className="w-full text-start text-lg font-semibold">
                      Flexible Learning Schedule
                    </h2>
                    <p className="w-96 text-sm">
                      Fit your coursework around your existing commitments and
                      obligations.
                    </p>
                  </div>
                  <Link
                    className="hover:bg-orange-500-md ml-96 mr-3 flex w-14 flex-wrap items-center justify-center gap-2 rounded border bg-slate-100 p-4"
                    to="/About"
                  >
                    <img src={icon3} alt="" />
                  </Link>
                </div>
                <div className="flex w-[40%] flex-col flex-wrap items-center justify-center gap-5 rounded-2xl bg-white p-3">
                  <div className="flex flex-col flex-wrap items-center justify-center gap-8">
                    <h3 className="w-96 text-xl font-semibold "> 03</h3>
                  </div>
                  <div className="ml-3 flex flex-col flex-wrap items-center justify-center gap-8 ">
                    <h2 className="w-full text-start text-lg font-semibold">
                      Flexible Learning Schedule
                    </h2>
                    <p className="w-96 text-sm">
                      Fit your coursework around your existing commitments and
                      obligations.
                    </p>
                  </div>
                  <Link
                    className="ml-96 mr-3 flex w-14 flex-wrap items-center justify-center gap-2 rounded-md border bg-slate-100 p-4 hover:bg-orange-500"
                    to="/About"
                  >
                    <img src={icon3} alt="" />
                  </Link>
                </div>
                <div className="flex w-[40%] flex-col flex-wrap items-center justify-center gap-5 rounded-2xl bg-white p-3">
                  <div className="flex flex-col flex-wrap items-center justify-center gap-8">
                    <h3 className="w-96 text-xl font-semibold "> 04</h3>
                  </div>
                  <div className="ml-3 flex flex-col flex-wrap items-center justify-center gap-8 ">
                    <h2 className="w-full text-start text-lg font-semibold">
                      Flexible Learning Schedule
                    </h2>
                    <p className="w-96 text-sm">
                      Fit your coursework around your existing commitments and
                      obligations.
                    </p>
                  </div>
                  <Link
                    className="ml-96 mr-3 flex w-14 flex-wrap items-center justify-center gap-2 rounded-md border bg-slate-100 p-4 hover:bg-orange-500"
                    to="/About"
                  >
                    <img src={icon3} alt="" />
                  </Link>
                </div>
                <div className="flex w-[40%] flex-col flex-wrap items-center justify-center gap-5 rounded-2xl bg-white p-3">
                  <div className="flex flex-col flex-wrap items-center justify-center gap-8">
                    <h3 className="w-96 text-xl font-semibold "> 05</h3>
                  </div>
                  <div className="ml-3 flex flex-col flex-wrap items-center justify-center gap-8 ">
                    <h2 className="w-full text-start text-lg font-semibold">
                      Flexible Learning Schedule
                    </h2>
                    <p className="w-96 text-sm">
                      Fit your coursework around your existing commitments and
                      obligations.
                    </p>
                  </div>
                  <Link
                    className="ml-96 mr-3 flex w-14 flex-wrap items-center justify-center gap-2 rounded-md border bg-slate-100 p-4 hover:bg-orange-500"
                    to="/About"
                  >
                    <img src={icon3} alt="" />
                  </Link>
                </div>
                <div className="flex w-[40%] flex-col flex-wrap items-center justify-center gap-5 rounded-2xl bg-white p-3">
                  <div className="flex flex-col flex-wrap items-center justify-center gap-8">
                    <h3 className="w-96 text-xl font-semibold "> 06</h3>
                  </div>
                  <div className="ml-3 flex flex-col flex-wrap items-center justify-center gap-8 ">
                    <h2 className="w-full text-start text-lg font-semibold">
                      Flexible Learning Schedule
                    </h2>
                    <p className="w-96 text-sm">
                      Fit your coursework around your existing commitments and
                      obligations.
                    </p>
                  </div>
                  <Link
                    className="ml-96 mr-3 flex w-14 flex-wrap items-center justify-center gap-2 rounded-md border bg-slate-100 p-4 hover:bg-orange-500"
                    to="/About"
                  >
                    <img src={icon3} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="courses">
        <div className="counter">
          <div className="row">
            <div className="flex w-full flex-col flex-wrap gap-3">
              <h2 className="text-left text-2xl font-semibold">Our Courses</h2>
              <p className=" h-12  w-[933px]">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
              <div className="  h-10 w-[95px] items-end self-end rounded-xl border py-2  text-center   hover:bg-orange-500 hover:text-white">
                <Link to="/Courses"> View all</Link>
              </div>
            </div>
            <div className="container mx-auto grid grid-cols-2 gap-4">
              <Nefk />
              <Nefk />
              <Nefk />
              <Nefk />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto ">
        <div className="">
          <div className="">
            <div className="flex ">
              <div className="h-[109px] w-[993px]">
                <h2 className="mb-1 mt-5 font-mono text-2xl">
                  Our Testimonials
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                  eget elit id imperdiet et. Cras eu sit dignissim lorem nibh
                  et. Ac cum eget habitasse in velit fringilla feugiat senectus
                  in.
                </p>
              </div>
              <div className="ml-40 mt-20 ">
                <Link
                  className="bg-light-970 hover:bg-light-950 h-fit w-min cursor-pointer whitespace-nowrap rounded-md border px-4 py-[14px] font-medium"
                  to="/Courses"
                >
                  View all
                </Link>
              </div>
            </div>
            <div className="container mx-auto ">
              <Obj />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto ">
        <Plan />
      </section>
    </main>
  );
};

export default Home;
