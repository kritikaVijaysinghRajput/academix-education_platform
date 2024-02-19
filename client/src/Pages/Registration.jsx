import React, { useState } from "react";
import { girlboypng, student, teacher } from "../assets";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideFromLeft } from "../constants/style";

export default function Registration() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    userType: "",
  });
  const registration = async () => {
    if (validateForm()) {
      toast.success("Done");
      const newUser = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.username,
          email: formData.email,
          dob: formData.dateOfBirth,
          password: formData.password,
          contact: formData.phoneNumber,
          usertype: formData.userType,
        }),
      });
      const response = await newUser.json(); // or await newUser.text();
      console.log("response", response);
    } else {
      console.log(formData);
      toast.error("nooooo!");
    }
  };
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!formData.username) {
      isValid = false;
      newErrors.username = "Username is required";
    }

    if (!formData.email) {
      isValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = "Invalid email address";
    }

    if (!formData.phoneNumber) {
      isValid = false;
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.dateOfBirth) {
      isValid = false;
      newErrors.dateOfBirth = "Date of birth is required";
    }

    if (!formData.password) {
      isValid = false;
      newErrors.password = "Password is required";
    }
    if (!formData.userType) {
      isValid = false;
      newErrors.userType = "UserType is required";
    }

    if (!formData.confirmPassword) {
      isValid = false;
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      isValid = false;
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      toast.success("Registration Successfull!");
      console.log("Form submitted successfully:", formData);

      // setTimeout(() => {
      //   window.location.reload();
      // }, 1000);
    } else {
      toast.error("Validation Failed");
      console.log("Form validation failed", errors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div variants={slideFromLeft} initial="hidden" animate="visible">
      <div className="relative h-screen flex ">
        <div className="flex-none w-5/12">
          <p className="font-semibold m-3 font-sans text-3xl text-primary">
            ACADEMIX
          </p>
        </div>
        <img
          className="flex mt-48 w-96 ml-5  absolute"
          src={girlboypng}
          alt=""
        />
        {/* Right Column with White Card */}
        <div
          className="flex-1 flex items-center justify-center  bg-primary p-8 shadow-lg rounded-tl-xl"
          style={{
            borderTopLeftRadius: "10rem",
            borderBottomLeftRadius: "10rem",
          }}
        >
          <div className="flex-1 flex items-center justify-center  ">
            <div className="bg-white p-9 ml-52 shadow-primary shadow-sm rounded-2xl">
              <p className="text-center mb-10 text-2xl font-bold">Sign up</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>

                  <input
                    className={`w-full p-2 border rounded-md ${
                      errors.username ? "border-red-500" : ""
                    }`}
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm">{errors.username}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className={`w-full p-2 border rounded-md ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>
                    <input
                      className={`w-full p-2 border rounded-md ${
                        errors.phoneNumber ? "border-red-500" : ""
                      }`}
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Enter your number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="dateOfBirth"
                    >
                      Date of Birth
                    </label>
                    <input
                      className={`w-full p-2 border rounded-md ${
                        errors.dateOfBirth ? "border-red-500" : ""
                      }`}
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-red-500 text-sm">
                        {errors.dateOfBirth}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className={`w-full p-2 border rounded-md ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      className={`w-full p-2 border rounded-md ${
                        errors.confirmPassword ? "border-red-500" : ""
                      }`}
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center mt-5 gap-8  ">
                  <div
                    onClick={() => (formData.userType = "student")}
                    className={` ${
                      formData.userType == "student"
                        ? "border-4 border-primary"
                        : ""
                    } border border-gray-400 p-4  rounded-md shadow-md text-center h-24 cursor-pointer`}
                  >
                    <img src={student} className=" ml-4 text-4xl h-10 " />
                    <p className="text-lg font-semibold">Student</p>
                  </div>

                  <div
                    onClick={() => (formData.userType = "teacher")}
                    className={` ${
                      formData.userType == "teacher"
                        ? "border-4 border-primary"
                        : ""
                    } border border-gray-400 p-4  rounded-md shadow-md text-center h-24 cursor-pointer`}
                  >
                    <img src={teacher} className="ml-4 text-4xl h-10" />
                    <p className=" text-lg font-semibold">Teacher</p>
                  </div>
                </div>

                <button
                  onClick={registration}
                  type="submit"
                  className="block mx-auto mt-6 text-xl bg-primary w-full text-white p-2 rounded-lg hover:bg-purple-400"
                >
                  Signup
                </button>
                <p className=" flex justify-center items-center mt-4 text-sm  ">
                  Already have an Account?
                  <Link to="/login" className="text-blue-500 underline">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
