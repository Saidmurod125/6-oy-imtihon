import frint from "./img/courses/frint.png";
import graphic from "./img/courses/graphic.png";
import java from "./img/courses/java.png";
import mobile from "./img/courses/mobile.png";
import ui from "./img/courses/ui.png";
import web from "./img/courses/web.png";
export default function Courses() {
  return (
    <div className="container mx-auto ">
      <main className="container mx-auto flex-1 ">
        <div className="flex border-b ">
          <h2 className="mb-14 text-2xl font-semibold">
            Online Courses on Design and <br /> Development
          </h2>
          <p className="text-dark-300  ml-28 max-w-[600px] xl:max-w-[650px] xl:text-[17px]">
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 courses designed to provide you with comprehensive
            knowledge and practical experience. Explore the courses below and
            find the perfect fit for your learning journey.
          </p>
        </div>
        <div className=" my-[50px] gap-y-4">
          <div className="rounded-lg bg-white p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <div>
                <h5 className="text-dark-150 text-lg font-semibold">
                  Web Design Fundamentals
                </h5>
                <p className="text-dark-350 pt-1">
                  Learn the fundamentals of web design, including HTML, CSS, and
                  responsive design principles. Develop the skills to create
                  visually appealing and user-friendly websites.
                </p>
              </div>
              <button
                type="button"
                className="bg-light-970 hover:bg-light-950 h-fit w-min cursor-pointer whitespace-nowrap rounded-md border px-4 py-[14px] font-medium"
              >
                View Course
              </button>
            </div>
            <div className="my-6 grid grid-cols-3 gap-x-[10px]">
              <img
                src={java}
                alt="Web Design Fundamentals image"
                className="rounded-md"
              />
              <img
                src={web}
                alt="Web Design Fundamentals image"
                className="rounded-md"
              />
              <img
                src={frint}
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
              <div className="flex flex-col justify-between gap-5 p-6 lg:flex-row lg:py-0">
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      01
                    </span>
                    <p className="text-dark-200 font-medium">
                      Introduction to HTML
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      02
                    </span>
                    <p className="text-dark-200 font-medium">
                      Styling with CSS
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      03
                    </span>
                    <p className="text-dark-200 font-medium">
                      Introduction to Responsive Design
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      04
                    </span>
                    <p className="text-dark-200 font-medium">
                      Design Principles for Web
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      05
                    </span>
                    <p className="text-dark-200 font-medium">
                      Building a Basic Website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <div>
                <h5 className="text-dark-150 text-lg font-semibold">
                  UI/UX Design
                </h5>
                <p className="text-dark-350 pt-1">
                  Master the art of creating intuitive user interfaces (UI) and
                  enhancing user experiences (UX). Learn design principles,
                  wireframing, prototyping, and usability testing techniques.
                </p>
              </div>
              <button
                type="button"
                className="bg-light-970 hover:bg-light-950 h-fit w-min cursor-pointer whitespace-nowrap rounded-md border px-4 py-[14px] font-medium"
              >
                View Course
              </button>
            </div>
            <div className="my-6 grid grid-cols-3 gap-x-[10px]">
              <img src={web} alt="UI/UX Design image" className="rounded-md" />
              <img src={ui} alt="UI/UX Design image" className="rounded-md" />
              <img
                src={mobile}
                alt="UI/UX Design image"
                className="rounded-md"
              />
            </div>
            <div className="mb-9 flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-dark-350 flex gap-x-2">
                <span className="rounded-md border px-3 py-2">6 Weeks</span>
                <span className="rounded-md border px-3 py-2">
                  Intermediate
                </span>
              </div>
              <p className="text-dark-150 font-medium">By Emily Johnson</p>
            </div>
            <div className="rounded-[10px] border ">
              <h6 className="text-dark-150 border-b px-5 py-[14px] font-semibold">
                Curriculum
              </h6>
              <div className="flex flex-col justify-between gap-5 p-6 lg:flex-row lg:py-0">
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      01
                    </span>
                    <p className="text-dark-200 font-medium">
                      Introduction to UI/UX Design
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      02
                    </span>
                    <p className="text-dark-200 font-medium">
                      User Research and Personas
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      03
                    </span>
                    <p className="text-dark-200 font-medium">
                      Wireframing and Prototyping
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      04
                    </span>
                    <p className="text-dark-200 font-medium">
                      Visual Design and Branding
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      05
                    </span>
                    <p className="text-dark-200 font-medium">
                      Usability Testing and Iteration
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <div>
                <h5 className="text-dark-150 text-lg font-semibold">
                  Mobile App Development
                </h5>
                <p className="text-dark-350 pt-1">
                  Dive into the world of mobile app development. Learn to build
                  native iOS and Android applications using industry-leading
                  frameworks like Swift and Kotlin.
                </p>
              </div>
              <button
                type="button"
                className="bg-light-970 hover:bg-light-950 h-fit w-min cursor-pointer whitespace-nowrap rounded-md border px-4 py-[14px] font-medium"
              >
                View Course
              </button>
            </div>
            <div className="my-6 grid grid-cols-3 gap-x-[10px]">
              <img
                src={java}
                alt="Mobile App Development image"
                className="rounded-md"
              />
              <img
                src={graphic}
                alt="Mobile App Development image"
                className="rounded-md"
              />
              <img
                src={frint}
                alt="Mobile App Development image"
                className="rounded-md"
              />
            </div>
            <div className="mb-9 flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-dark-350 flex gap-x-2">
                <span className="rounded-md border px-3 py-2">12 Weeks</span>
                <span className="rounded-md border px-3 py-2">
                  Intermediate
                </span>
              </div>
              <p className="text-dark-150 font-medium">By David Brown</p>
            </div>
            <div className="rounded-[10px] border ">
              <h6 className="text-dark-150 border-b px-5 py-[14px] font-semibold">
                Curriculum
              </h6>
              <div className="flex flex-col justify-between gap-5 p-6 lg:flex-row lg:py-0">
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      01
                    </span>
                    <p className="text-dark-200 font-medium">
                      Introduction to Mobile App Development
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      02
                    </span>
                    <p className="text-dark-200 font-medium">
                      Fundamentals of Swift Programming (iOS)
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      03
                    </span>
                    <p className="text-dark-200 font-medium">
                      Fundamentals of Kotlin Programming (Android)
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      04
                    </span>
                    <p className="text-dark-200 font-medium">
                      Building User Interfaces
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      05
                    </span>
                    <p className="text-dark-200 font-medium">
                      App Deployment and Testing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <div>
                <h5 className="text-dark-150 text-lg font-semibold">
                  Graphic Design for Beginners
                </h5>
                <p className="text-dark-350 pt-1">
                  Discover the fundamentals of graphic design, including
                  typography, color theory, layout design, and image
                  manipulation techniques. Create visually stunning designs for
                  print and digital media.
                </p>
              </div>
              <button
                type="button"
                className="bg-light-970 hover:bg-light-950 h-fit w-min cursor-pointer whitespace-nowrap rounded-md border px-4 py-[14px] font-medium"
              >
                View Course
              </button>
            </div>
            <div className="my-6 grid grid-cols-3 gap-x-[10px]">
              <img
                src={java}
                alt="Graphic Design for Beginners image"
                className="rounded-md"
              />
              <img
                src={ui}
                alt="Graphic Design for Beginners image"
                className="rounded-md"
              />
              <img
                src={mobile}
                alt="Graphic Design for Beginners image"
                className="rounded-md"
              />
            </div>
            <div className="mb-9 flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-dark-350 flex gap-x-2">
                <span className="rounded-md border px-3 py-2">10 Weeks</span>
                <span className="rounded-md border px-3 py-2">Beginner</span>
              </div>
              <p className="text-dark-150 font-medium">By Sarah Thompson</p>
            </div>
            <div className="rounded-[10px] border ">
              <h6 className="text-dark-150 border-b px-5 py-[14px] font-semibold">
                Curriculum
              </h6>
              <div className="flex flex-col justify-between gap-5 p-6 lg:flex-row lg:py-0">
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      01
                    </span>
                    <p className="text-dark-200 font-medium">
                      Introduction to Graphic Design
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      02
                    </span>
                    <p className="text-dark-200 font-medium">
                      Typography and Color Theory
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      03
                    </span>
                    <p className="text-dark-200 font-medium">
                      Layout Design and Composition
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      04
                    </span>
                    <p className="text-dark-200 font-medium">
                      Image Editing and Manipulation
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      05
                    </span>
                    <p className="text-dark-200 font-medium">
                      Designing for Print and Digital Media
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
              <div>
                <h5 className="text-dark-150 text-lg font-semibold">
                  Frontend Web Development
                </h5>
                <p className="text-dark-350 pt-1">
                  Become proficient in front-end web development. Learn HTML,
                  CSS, JavaScript, and popular frameworks like Bootstrap and
                  React. Build interactive and responsive websites.
                </p>
              </div>
              <button
                type="button"
                className="bg-light-970 hover:bg-light-950 h-fit w-min cursor-pointer whitespace-nowrap rounded-md border px-4 py-[14px] font-medium"
              >
                View Course
              </button>
            </div>
            <div className="my-6 grid grid-cols-3 gap-x-[10px]">
              <img
                src={web}
                alt="Frontend Web Development image"
                className="rounded-md"
              />
              <img
                src={graphic}
                alt="Frontend Web Development image"
                className="rounded-md"
              />
              <img
                src={frint}
                alt="Frontend Web Development image"
                className="rounded-md"
              />
            </div>
            <div className="mb-9 flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-dark-350 flex gap-x-2">
                <span className="rounded-md border px-3 py-2">20 Weeks</span>
                <span className="rounded-md border px-3 py-2">
                  Intermediate
                </span>
              </div>
              <p className="text-dark-150 font-medium">By Michael Adams</p>
            </div>
            <div className="rounded-[10px] border ">
              <h6 className="text-dark-150 border-b px-5 py-[14px] font-semibold">
                Curriculum
              </h6>
              <div className="flex flex-col justify-between gap-5 p-6 lg:flex-row lg:py-0">
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      01
                    </span>
                    <p className="text-dark-200 font-medium">
                      HTML Fundamentals
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      02
                    </span>
                    <p className="text-dark-200 font-medium">
                      CSS Styling and Layouts
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      03
                    </span>
                    <p className="text-dark-200 font-medium">
                      JavaScript Basics
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      04
                    </span>
                    <p className="text-dark-200 font-medium">
                      Building Responsive Websites
                    </p>
                  </div>
                </div>
                <div className="step-line lg:h-[142px] lg:pb-3 lg:pr-3">
                  <div className="pt-5">
                    <span className="text-dark-150 text-[30px] font-extrabold">
                      05
                    </span>
                    <p className="text-dark-200 font-medium">
                      Introduction to Tailwind and React
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
