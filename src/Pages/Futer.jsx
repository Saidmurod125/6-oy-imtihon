import Logo from "../image/logo.svg";

const Futer = () => {
  return (
    <div>
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
    </div>
  );
};

export default Futer;
