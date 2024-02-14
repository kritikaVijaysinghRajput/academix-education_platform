import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div>
      <div className="relative h-screen flex bg-primary">
        <div className="flex-none w-1/3">
          <p className="font-semibold text-3xl text-white">ACADEMIX</p>
        </div>

        {/* Right Column with White Card */}
        <div
          className="flex-1 flex items-center justify-center bg-white p-8 shadow-lg rounded-tl-2xl"
          style={{
            borderTopLeftRadius: "10rem",
            borderBottomLeftRadius: "10rem",
          }}
        >
          <div className="flex-1 flex items-center justify-center -ml-52 ">
            <div className="bg-gray-50 p-12  shadow-primary shadow-sm rounded-2xl">
              <p className="text-center mb-10 text-2xl font-bold">Settings</p>

              <p className="mb-5">Profile Picture*</p>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>

                  <input
                    className="w-full p-2 border rounded-md "
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full p-2 border rounded-md "
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
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
                      className="w-full p-2 border rounded-md"
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Enter your number"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="dateOfBirth"
                    >
                      Date of Birth
                    </label>
                    <input
                      className="w-full p-2 border rounded-md"
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full p-2 border rounded-md"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      className="w-full p-2 border rounded-md "
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="block mx-auto mt-6 text-xl bg-primary w-full text-white p-2 rounded-lg hover:bg-purple-400"
                >
                  Update
                </button>
                <p className=" flex justify-center items-center mt-4 text-sm  ">
                  Do you want to UpdatePassword?
                  <Link
                    to="/updatepassword"
                    className="text-blue-500 underline"
                  >
                    UpdatePassword
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
