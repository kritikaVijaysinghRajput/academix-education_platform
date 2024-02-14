import React from "react";
import LeftSidebar from "../../Components/Teacher/LeftSidebar";
import TeacherNavbar from "../../Components/TeacherNavbar";
import AnalyticSidebarTeacher from "../../Components/Teacher/AnalyticSidebarTeacher";

const CreateAssignment = () => {
  return (
    <div className="create assignment">
      <div className="navbar fixed top-0 bg-white w-full z-40">
        <TeacherNavbar />
      </div>
      <div className="mainform w-full flex justify-center my-4  ">
        <div className="Leftsidebar w-2/12 fixed top-20 left-0 bg-white   ">
          <LeftSidebar />
        </div>
        <div className="main mx-60 mt-20 p-4 w-full flex justify-center  ">
          <div className="bg-white rounded-2xl w-full h-full shadow p-4 relative border ">
            <div>
              <p className=" font-semibold text-2xl flex justify-center ">
                Create Assignment
              </p>
              <form className="flex-1 mt-10">
                <input
                  type="text"
                  placeholder="Topic"
                  className="block w-full border border-black rounded-lg p-5 my-5 text-sm"
                />
                <input
                  type="text"
                  placeholder="Subject marks"
                  className="block w-full border border-black rounded-lg p-5 my-5 text-sm"
                />
                <input
                  type="text"
                  placeholder="Due date"
                  className="block w-full border border-black rounded-lg p-5 my-5 text-sm"
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="block w-full border border-black rounded-lg p-5 my-5 text-sm h-28"
                />
                <button className=" shadow-lg p-2 flex border w-full m-2 justify-center items-center gap-2 rounded-lg text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                    />
                  </svg>
                  Upload file
                </button>
              </form>
              <div className="flex justify-center items-center shadow-lg">
                <button className="bg-primary text-white  w-full p-5  mt-2 flex items-center justify-center gap-2 rounded-lg hover:bg-purple-400">
                  Create Assignment
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="Right w-2/12 fixed top-20 right-0  ">
          <AnalyticSidebarTeacher />
        </div>
      </div>
    </div>
  );
};

export default CreateAssignment;
