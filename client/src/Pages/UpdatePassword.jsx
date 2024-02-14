import React from "react";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
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
              <p className="text-center mb-10 text-2xl font-bold">
                Update Password
              </p>

              <form>
                <div className="mb-5 ">
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

                <button
                  type="submit"
                  className="block mx-auto mt-6 text-xl bg-primary w-full text-white p-2 rounded-lg hover:bg-purple-400"
                >
                  Update Password
                </button>
                <p className=" flex justify-center items-center mt-4 text-sm  ">
                  Do you want to Return Settings?
                  <Link to="/settings" className="text-blue-500 underline">
                    SettingsPage
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

export default UpdatePassword;
