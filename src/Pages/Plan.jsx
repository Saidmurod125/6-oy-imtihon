import { NavLink } from "react-router-dom";
import logo from "../image/pit.svg";

import x from "../image/x.svg";
const Plan = () => {
  return (
    <div className="container mx-auto ">
      <div className="container mx-auto w-full flex-col gap-4 border-b pb-8 pt-14 md:flex md:flex-col md:items-center lg:flex-row lg:justify-between">
        <h1 className="flex text-2xl ">Our Pricings</h1>
        <p className="text-dark-300 max-w-[600px] xl:max-w-[650px] xl:text-[17px]">
          Welcome to SkillBridge Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you`re an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>
      <div className=" text-dark-300 text-medium container  mx-auto mb-[40px] mt-[50px] flex w-[272px]  justify-between rounded-lg bg-white p-3 ">
        <NavLink
          to="/"
          className="rounded-md px-6 py-4 transition-colors hover:bg-orange-500"
        >
          Monthly
        </NavLink>
        <NavLink
          to="/"
          className="rounded-md px-6 py-4 transition-colors hover:bg-orange-500 "
        >
          Yearly
        </NavLink>
      </div>
      <div className=" container mx-auto mb-[90px] flex w-fit flex-col gap-[30px] rounded-xl bg-white p-5 text-center lg:mb-[120px] lg:flex-row lg:p-12">
        <div className="bg-light-970 ml-5 mr-20 w-fit rounded-xl p-5 ">
          <h4 className="rounded border-2 border-orange-200 bg-orange-200 py-2 font-medium ">
            Free Plan
          </h4>
          <span className="text-dark-300 block py-[20px] font-medium">
            <span className="text-dark-150 text-[50px] font-semibold">0$</span>
            /monthly
          </span>
          <div className="container mx-auto rounded-md bg-white p-5">
            <h5 className="pb-5 font-medium">Available Features</h5>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Access to selected free courses.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Limited course materials and resources.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Basic community support.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                No certification upon completion.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Ad-supported platform.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={x}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Access to exclusive Pro Plan community forums.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={x}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Early access to new courses and updates.
              </li>
            </ul>
            <button
              type="button"
              className=" mt-[30px] w-full rounded-b-md bg-orange-500 p-[18px]"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-light-970 w-fit rounded-xl p-5 ">
          <h4 className="rounded border-2 border-orange-200 bg-orange-200 py-2 font-medium">
            Pro Plan
          </h4>
          <span className="text-dark-300 block py-[20px] font-medium">
            <span className="text-dark-150 text-[50px] font-semibold">79$</span>
            /monthly
          </span>
          <div className="rounded-md bg-white p-5">
            <h5 className="pb-5 font-medium">Available Features</h5>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className=" relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="i"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Unlimited access to all courses.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Unlimited course materials and resources.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Priority support from instructors.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Course completion certificates.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Ad-free experience.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Access to exclusive Pro Plan community forums.
              </li>
              <li className="flex items-center gap-2 rounded-md border p-3 text-left">
                <div className="relative min-h-[24px] min-w-[24px] rounded bg-orange-200">
                  <img
                    src={logo}
                    alt="icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                Early access to new courses and updates.
              </li>
            </ul>
            <button
              type="button"
              className=" mt-[30px] w-full rounded-b-md bg-orange-500 p-[18px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plan;
