import { Link } from "react-router-dom";
import user from "./img/user/user1.png";
import user2 from "./img/user/user2.png";
import user3 from "./img/user/user3.png";
import user4 from "./img/user/user4.png";
const Obj = () => {
  return (
    <div className="container mx-auto flex flex-wrap gap-5 pt-10 ">
      <div className=" w-[49%] rounded-xl border  py-5 ">
        <h4 className="mx-32">
          The web design course provided a solid foundation for me. The
          instructors <br /> were knowledgeable and supportive, and the
          interactive <br /> learning environment was engaging. I highly
          recommend it!
        </h4>
        <div className="flex items-center justify-between pt-10 ">
          <div className="flex items-center gap-5 px-4 ">
            <img src={user} alt="" />
            <h2 className="text-2xl text-black ">Sarah L</h2>
          </div>
          <div className="pr-4 ">
            <Link
              to="/Stor"
              className="rounded-xl border px-6 py-2 text-xl hover:bg-amber-500 hover:text-white"
            >
              Read Full Story
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-[49%] rounded-xl border px-8 py-5 ">
        <h4 className="">
          The web design course provided a solid foundation for me. The
          instructors <br /> were knowledgeable and supportive, and the
          interactive <br /> learning environment was engaging. I highly
          recommend it!
        </h4>
        <div className="mx-auto flex items-center justify-between pt-10 ">
          <div className="flex items-center gap-5 ">
            <img src={user2} alt="" />
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
      <div className=" w-[49%] rounded-xl border px-8 py-5 ">
        <h4 className="">
          The web design course provided a solid foundation for me. The
          instructors <br /> were knowledgeable and supportive, and the
          interactive <br /> learning environment was engaging. I highly
          recommend it!
        </h4>
        <div className="flex items-center justify-between pt-10 ">
          <div className="flex items-center gap-5 ">
            <img src={user3} alt="" />
            <h2 className="text-2xl text-black ">Emily R</h2>
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
      <div className=" w-[49%] rounded-xl border px-8 py-5 ">
        <h4 className="">
          The web design course provided a solid foundation for me. The
          instructors <br /> were knowledgeable and supportive, and the
          interactive <br /> learning environment was engaging. I highly
          recommend it!
        </h4>
        <div className="flex items-center justify-between pt-10 ">
          <div className="flex items-center gap-5 ">
            <img src={user4} alt="" />
            <h2 className="text-2xl text-black ">Michael K</h2>
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
  );
};

export default Obj;
