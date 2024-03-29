import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { girlboypng } from "../assets";
import { motion } from "framer-motion";
import { slideFromLeft } from "../constants/style";

export default function LoginPage() {
  const navigate = useNavigate();

  const login = async () => {
    if (validateForm()) {
      const newUser = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const response = await newUser.json(); // or await newUser.text();
      console.log("response", response);
      toast.success("Login successfull!");
      if (response.usertype === "student") {
        navigate("/student");
      } else if (response.usertype === "teacher") {
        navigate("/teacher");
      } else {
        navigate("/login");
      }
    } else {
      console.log(formData);
      toast.error("nooooo!");
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email) {
      isValid = false;
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      isValid = false;
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      console.log("Form submitted successfully:", formData);
    } else {
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
      <div className="relative h-screen flex">
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
          className=" flex-1 flex items-center justify-center bg-primary p-8 shadow-lg rounded-tl-2xl"
          style={{
            borderTopLeftRadius: "10rem",
            borderBottomLeftRadius: "10rem",
          }}
        >
          <div className="flex-1 flex items-center justify-center   ">
            <motion.div className="card bg-white border p-12 shadow-primary shadow-md rounded-3xl  ">
              <p className="text-center mb-10 text-2xl font-bold">Log in</p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className={`w-96 p-2 border rounded-md ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    type="text"
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

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className={`w-96 p-2 border rounded-md ${
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

                <button
                  onClick={login}
                  type="submit"
                  className="block mx-auto mt-10 text-xl bg-primary w-full text-white p-2 rounded-lg hover:bg-purple-400"
                >
                  Log in
                </button>
                <p className=" flex justify-center items-center mt-4 text-sm  ">
                  Don't have an account?
                  <Link to="/registration" className="text-blue-500 underline">
                    Register
                  </Link>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
