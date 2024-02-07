import { useState } from "react";
import { Link } from "react-router-dom";
import user from "./img/user/user1.png";

const Step1 = ({ onNext }) => {
  const [subscriptionType, setSubscriptionType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubscriptionChange = (event) => {
    setSubscriptionType(event.target.value);
    setErrors({});
  };

  const handleNext1 = () => {
    const isValid = validateFields();
    if (isValid) {
      onNext();
    }
  };

  const validateFields = () => {
    const errors = {};

    if (firstName.trim() === "") {
      errors.firstName = "Full name is required";
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <div className="container mx-auto flex justify-between gap-5">
      <div className="lift">
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
      <div className="mt-3 h-[100vh] w-[660px] rounded-2xl bg-white p-10 shadow-2xl">
        <h2 className="mb-4 text-center text-2xl ">Sign Up</h2>
        <p className="text-center">
          Create an account to unlock exclusive features
        </p>
        <div className="mb-4">
          <label className="mb-2 block ">Full Name:</label>
          <input
            className="w-full rounded border p-2 "
            required
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>

        <div className="mb-4">
          <label className="mb-2 block ">Email:</label>
          <input
            className="w-full rounded border p-2 "
            required
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className="mb-4">
          <label className="mb-2 block ">Password:</label>
          <input
            className="w-full rounded border p-2"
            required
            id="password"
            name="password"
            autoComplete="current-password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div className="my-4">
          <input
            required
            type="radio"
            id="free"
            name="subscription"
            value="free"
            checked={subscriptionType === "free"}
            onChange={handleSubscriptionChange}
            className="mr-2"
          />
          <label className="" htmlFor="free">
            I agree with Terms of Use and Privacy Policy
          </label>
        </div>

        <button
          className="mx-auto mb-10 w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
          onClick={handleNext1}
          disabled={!firstName || !email || !password || !subscriptionType}
        >
          Next
        </button>

        <div content=" mx-auto w-full">
          <a
            className="ml-1 rounded bg-slate-400 px-64 py-2 hover:bg-blue-700 hover:text-white"
            href="https://www.google.co.uz/?hl=ru"
          >
            GOOGLE
          </a>
        </div>
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <Link className=" text-sky-400 hover:text-sky-600" to="/Loging">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Step1;
