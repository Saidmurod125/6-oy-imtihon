import { useState, useEffect } from "react";
import Svg from "./svg";
import Twi from "./img/icon/twi.png";
import Fas from "./img/icon/fa.png";
import Ini from "./img/icon/em.png";
import { Link } from "react-router-dom";

const Phone = ({ onNext }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [errors, setErrors] = useState({});

  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
  };

  const savePhoneNumber = () => {
    localStorage.setItem("phoneNumber", phoneNumber);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };

  const validateFields = () => {
    const errors = {};

    if (firstName === "") {
      errors.firstName = "First name is required";
    }

    if (lastName === "") {
      errors.lastName = "Last name is required";
    }

    if (email === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0; // Return true if there are no errors
  };

  const handleNext = () => {
    const isValid = validateFields();

    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="container mx-auto mt-3 flex justify-between border bg-white p-10 shadow-2xl ">
      <div>
        <div className="columns-2 ">
          <div className="mb-4">
            <label className="mb-2 block ">First Name:</label>
            <input
              className="w-full rounded border p-2 "
              required
              type="text"
              placeholder="Birbalajon"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div className="mb-4">
            <label className="mb-2 block ">Last Name:</label>
            <input
              placeholder="Birbalojonov"
              className="w-full rounded border p-2 "
              required
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
          <div className="mb-4">
            <label className="mb-2 block ">Email:</label>
            <input
              className="w-full rounded border p-2 "
              required
              placeholder="birbalo@123gmail.com"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label className="mb-2 block ">Phone</label>
            <input
              className="w-full rounded border p-2 "
              type="tel"
              placeholder="+998991234567"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-2 block ">Subject</label>
          <input
            className="w-full rounded border p-2 "
            required
            placeholder="xolxishing"
            type="text"
            value={middleName}
            onChange={handleMiddleNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block ">Message</label>
          <textarea
            className="w-full rounded border p-2 "
            type="text"
            placeholder=" Savolinggiz bulsa junating bulmagan narsaga bezovta qilmang"
            required
          />
        </div>
        <Link
          className="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-amber-500"
          disabled={!firstName || !lastName || !email || !phoneNumber}
          onClick={(handleNext, savePhoneNumber)}
          to="/"
        >
          Send Your Message
        </Link>
      </div>
      <div className="w-[450px]  ">
        <div className=" my-3 h-[155px] w-[360px] items-center  justify-center   rounded-lg bg-slate-100 py-5 text-center  shadow-2xl  ">
          <button className=" h-[52px] w-[52px] rounded-lg bg-slate-200 p-3">
            <Svg />
          </button>
          <p>support@skillbridge.com</p>
        </div>
        <div className=" my-3 h-[155px] w-[360px] items-center justify-center rounded-lg bg-slate-100   py-5 text-center shadow-2xl   ">
          <button className=" h-[52px] w-[52px] rounded-lg bg-slate-200 p-3">
            <Svg />
          </button>
          <p>+998991234567</p>
        </div>
        <div className=" my-3 h-[155px] w-[360px] items-center justify-center rounded-lg bg-slate-100   py-5 text-center shadow-2xl   ">
          <button className=" h-[52px] w-[52px] rounded-lg bg-slate-200 p-3">
            <Svg />
          </button>
          <p>Some Where in the World</p>
        </div>
        <div className="h-[155px] w-[360px] items-center justify-center  rounded-lg   bg-slate-100 py-5 text-center shadow-2xl  ">
          <button className=" m-1 h-[52px] w-[52px] rounded-lg bg-slate-200 p-3">
            <img src={Fas} alt="" />
          </button>
          <button className="  h-[52px] w-[52px] rounded-lg bg-slate-200 p-3">
            <img src={Twi} alt="" />
          </button>
          <button className=" m-1 h-[52px] w-[52px] rounded-lg bg-slate-200 p-3">
            <img src={Ini} alt="" />
          </button>
          <p>Some Where in the World</p>
        </div>
      </div>
    </div>
  );
};

export default Phone;
