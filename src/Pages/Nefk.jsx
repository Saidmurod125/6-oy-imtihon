import { Link } from "react-router-dom";
import cors from "./img/courses/frint.png";
const Nefk = () => {
  return (
    <div className="container mx-auto rounded-lg bg-white p-6 ">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        <div>
          <h5 className="text-dark-150 text-lg font-semibold">
            Web Design Fundamentals
          </h5>
          <p className="text-dark-350 pt-1">
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>
        </div>
        <Link
          to="/Singer1"
          className="   h-fit w-min cursor-pointer whitespace-nowrap rounded-md border px-4 py-[14px] font-medium  hover:bg-amber-500 hover:text-white"
        >
          View Course
        </Link>
      </div>
      <div className="my-6 grid grid-cols-3 gap-x-[10px]">
        <img
          src={cors}
          alt="Web Design Fundamentals image"
          className="rounded-md"
        />
      </div>
      <div className="mb-9 flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-dark-350 flex gap-x-2">
          <span className="rounded-md border px-3 py-2">4 Weeks</span>
          <span className="rounded-md border px-3 py-2">Beginner</span>
        </div>
        <p className="text-dark-150 font-medium">By John Smith</p>
      </div>
      <div className="rounded-[10px] border ">
        <p className="text-dark-150 border-b px-5 py-[14px] font-semibold">
          Curriculum
        </p>
      </div>
    </div>
  );
};

export default Nefk;
