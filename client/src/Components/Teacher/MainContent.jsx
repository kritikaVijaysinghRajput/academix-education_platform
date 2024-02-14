import React from "react";
import { Attendancegraph, Overallscore } from "../../assets";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className=" main">
      <div className="text-lg font-semibold mb-4">My Progress</div>

      <div className="flex">
        <div className="subject flex gap-6 ml-2">
          {/* 1st Card  */}
          <div className="bg-[#c9f3e1] p-4 shadow-sm  rounded-2xl h-52 w-56">
            <div className=" items-center">
              <div className="w-6 h-6 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  aa
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="text-lg font-bold mt-6">Android Programming</div>
            </div>

            <div className="ml-4">
              <Link
                to="/teacherSubject"
                className=" mt-10 w-24 flex items-center justify-center rounded-2xl shadow-lg  bg-[#75c6a4] h-10"
              >
                Open
              </Link>
            </div>
          </div>

          {/* 3rd Card */}
          <div className="bg-[#f3d2e5] p-4 shadow-sm rounded-2xl h-52 w-56">
            <div className=" items-center">
              <div className="w-6 h-6 mr-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="text-lg font-bold mt-6">Computer Network</div>
            </div>

            <div className="ml-4">
              <button className=" mt-16 w-24 flex items-center justify-center rounded-2xl shadow-lg  bg-[#f19dce] h-10">
                Open
              </button>
            </div>
          </div>

          {/* 4th Card  */}
          <div className="bg-[#f5eee0] p-4 shadow-sm rounded-2xl h-52 w-56">
            <div className=" items-center">
              <div className="w-6 h-6 mr-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="text-lg font-bold mt-6">Cloud Computing</div>
            </div>
            <div className="ml-4">
              <button className=" mt-16 w-24 flex items-center justify-center rounded-2xl shadow-lg  bg-[#e4d5b6] h-10">
                Open
              </button>
            </div>
          </div>

          {/* 5th Card */}
          <div className="bg-[#d2c1f2] p-4 shadow-sm rounded-2xl h-52 w-56">
            <div className=" items-center">
              <div className="w-6 h-6 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-lg font-bold mt-6">Big Data management</div>
            </div>

            <div className="ml-4">
              <button className=" mt-10 w-24 flex items-center justify-center rounded-2xl shadow-lg bg-[#b28ff3]  h-10">
                Open
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg font-semibold mt-4">Working Activity</div>
      <div className="graph flex gap-2 p-2 items-center mt-4 justify-between  ">
        <div className="attendance">
          <p className=" text-sm  font-semibold mb-10">Subjects</p>
          <img className=" h-60 w-full" src={Attendancegraph} alt="" />
        </div>
        <div className="score">
          <p className=" text-sm  font-semibold mb-10">Overall Students</p>
          <img className=" h-60 w-full" src={Overallscore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
