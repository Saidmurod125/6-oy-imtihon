import Example from "./Exsres";
import { Link } from "react-router-dom";
import user from "./img/user/user1.png";

const Loging = () => {
  return (
    <div className="container mx-auto flex justify-between">
      <div className="h-[509px] w-[659px]">
        <h1 className="m-2 text-3xl">Students Testimonials</h1>
        <p className="m-2 ">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <div className="mx-auto mt-20 w-full rounded-xl border py-5">
          <h4 className="mx-5">
            The web design course provided a solid foundation for me. The
            instructors <br /> were knowledgeable and supportive, and the
            interactive <br /> learning environment was engaging. I highly
            recommend it!
          </h4>
          <div className="mx-5 flex items-center justify-between pt-10 ">
            <div className="flex items-center gap-5 ">
              <img src={user} alt="" />
              <h2 className="text-2xl text-black ">Sarah L</h2>
            </div>
            <div className="">
              <Link
                to="/About"
                className="rounded-xl border px-6 py-2 text-xl hover:bg-amber-500 hover:text-white"
              >
                Read Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Example />
    </div>
  );
};

export default Loging;
