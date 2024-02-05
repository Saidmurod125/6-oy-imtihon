import { Link } from "react-router-dom";
import Logo from "../image/Vector.svg";

export default function About() {
  return (
    <div>
      <div className="bg-logo mb-[50px] mt-[50px] flex flex-col rounded-[10px] bg-white p-[30px] xl:mb-[100px] xl:flex-row xl:justify-between xl:p-[60px] ">
        <main className="flex-1 xl:px-[60px]">
          <div className="flex flex-col gap-4 border-b pb-[30px] pt-[50px]  md:items-center lg:flex-row lg:justify-between">
            <h1 className="title">About Skillbridge</h1>
            <p className="text-dark-300 max-w-[600px] xl:max-w-[650px] xl:text-[17px]">
              Welcome to our platform, where we are passionate about empowering
              individuals to master the world of design and development. We
              offer a wide range of online courses designed to equip learners
              with the skills and knowledge needed to succeed in the
              ever-evolving digital landscape.
            </p>
          </div>
          <div>
            <div>
              <div className="py-[50px]">
                <h3 className="text-dark-200 text-2xl font-medium">
                  Achievements
                </h3>
                <p className="text-dark-350 ">
                  Our commitment to excellence has led us to achieve significant
                  milestones along our journey. Here are some of our notable
                  achievements
                </p>
              </div>
              <div className="grid gap-[10px] md:grid-cols-2 md:gap-[20px] xl:gap-[30px]">
                <div className="rounded-[10px] border bg-white p-[30px]">
                  <div className="border-primary-900 bg-primary-970 relative mb-6 h-14 w-14 rounded-md border">
                    <img
                      src={Logo}
                      alt="Achievements Icon"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <h4 className="pb-1 text-lg font-medium">
                    Trusted by Thousands
                  </h4>
                  <p className="text-dark-350">
                    We have successfully served thousands of students, helping
                    them unlock their potential and achieve their career goals.
                  </p>
                </div>
                <div className="rounded-[10px] border bg-white p-[30px]">
                  <div className="border-primary-900 bg-primary-970 relative mb-6 h-14 w-14 rounded-md border">
                    <img
                      src={Logo}
                      alt="Achievements Icon"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <h4 className="pb-1 text-lg font-medium">
                    Award-Winning Courses
                  </h4>
                  <p className="text-dark-350">
                    Our courses have received recognition and accolades in the
                    industry for their quality, depth of content, and effective
                    teaching methodologies.
                  </p>
                </div>
                <div className="rounded-[10px] border bg-white p-[30px]">
                  <div className="border-primary-900 bg-primary-970 relative mb-6 h-14 w-14 rounded-md border">
                    <img
                      src={Logo}
                      alt="Achievements Icon"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <h4 className="pb-1 text-lg font-medium">
                    Positive Student Feedback
                  </h4>
                  <p className="text-dark-350">
                    We take pride in the positive feedback we receive from our
                    students, who appreciate the practicality and relevance of
                    our course materials.
                  </p>
                </div>
                <div className="rounded-[10px] border bg-white p-[30px]">
                  <div className="border-primary-900 bg-primary-970 relative mb-6 h-14 w-14 rounded-md border">
                    <img
                      src={Logo}
                      alt="Achievements Icon"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <h4 className="pb-1 text-lg font-medium">
                    Industry Partnerships
                  </h4>
                  <p className="text-dark-350">
                    We have established strong partnerships with industry
                    leaders, enabling us to provide our students with access to
                    the latest tools and technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="py-[50px]">
                <h3 className="text-dark-200 text-2xl font-medium">
                  Our Goals
                </h3>
                <p className="text-dark-350 ">
                  At SkillBridge, our goal is to empower individuals from all
                  backgrounds to thrive in the world of design and development.
                  We believe that education should be accessible and
                  transformative, enabling learners to pursue their passions and
                  make a meaningful impact. Through our carefully crafted
                  courses, we aim to
                </p>
              </div>
              <div className="grid gap-[10px] md:grid-cols-2 md:gap-[20px] xl:gap-[30px]">
                <div className="rounded-[10px] border bg-white p-[30px]">
                  <div className="border-primary-900 bg-primary-970 relative mb-6 h-14 w-14 rounded-md border">
                    <img
                      src={Logo}
                      alt="Our Goals Icon"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <h4 className="pb-1 text-lg font-medium">
                    Provide Practical Skills
                  </h4>
                  <p className="text-dark-350">
                    We focus on delivering practical skills that are relevant to
                    the current industry demands. Our courses are designed to
                    equip learners with the knowledge and tools needed to excel
                    in their chosen field.
                  </p>
                </div>
                <div className="rounded-[10px] border bg-white p-[30px]">
                  <div className="border-primary-900 bg-primary-970 relative mb-6 h-14 w-14 rounded-md border">
                    <img
                      src={Logo}
                      alt="Our Goals Icon"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <h4 className="pb-1 text-lg font-medium">
                    Foster Creative Problem-Solving
                  </h4>
                  <p className="text-dark-350">
                    We encourage creative thinking and problem-solving
                    abilities, allowing our students to tackle real-world
                    challenges with confidence and innovation.
                  </p>
                </div>
                <div className="rounded-[10px] border bg-white p-[30px]">
                  <div className="border-primary-900 bg-primary-970 relative mb-6 h-14 w-14 rounded-md border">
                    <img
                      src={Logo}
                      alt="Our Goals Icon"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <h4 className="pb-1 text-lg font-medium">
                    Promote Collaboration and Community
                  </h4>
                  <p className="text-dark-350">
                    We believe in the power of collaboration and peer learning.
                    Our platform fosters a supportive and inclusive community
                    where learners can connect, share insights, and grow
                    together.
                  </p>
                </div>
                <div className="rounded-[10px] border bg-white p-[30px]">
                  <div className="border-primary-900 bg-primary-970 relative mb-6 h-14 w-14 rounded-md border">
                    <img
                      src={Logo}
                      alt="Our Goals Icon"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <h4 className="pb-1 text-lg font-medium">
                    Stay Ahead of the Curve
                  </h4>
                  <p className="text-dark-350">
                    The digital landscape is constantly evolving, and we strive
                    to stay at the forefront of industry trends. We regularly
                    update our course content to ensure our students receive the
                    latest knowledge and skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-logo mb-[50px] mt-[50px] flex flex-col rounded-[10px] bg-white p-[30px] xl:mb-[100px] xl:flex-row xl:justify-between xl:p-[60px] ">
            <div className="z-10">
              <h2 className="title">
                <span className="text-orange-500 ">Together</span>, lets shape
                the future of digital innovation
              </h2>
              <p className="pt-[10px]">
                Join us on this exciting learning journey and unlock your
                potential in design and development.
              </p>
            </div>
            <Link
              to="/courses"
              className="z-10 mt-10 w-[115px] rounded-md bg-orange-500 px-5  py-[14px] text-center hover:bg-orange-700"
            >
              Join Now
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
