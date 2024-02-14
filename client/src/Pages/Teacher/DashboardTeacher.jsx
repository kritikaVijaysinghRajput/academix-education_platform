import React, { useState } from "react";

import RightSidebar from "../../Components/Teacher/RightSidebar";
import MainContent from "../../Components/Teacher/MainContent";
import { studentDashboardLinksBottom } from "../../constants/indexStudent";
import { Link } from "react-router-dom";
import TeacherNavbar from "../../Components/TeacherNavbar";
import CreateSubject from "../../Components/Modals/CreateSubject";

const DashboardTeacher = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dashboardTeacher">
      <div className="navbar fixed top-0 bg-white w-full z-40">
        <div>
          {showModal && <CreateSubject onClose={() => setShowModal(false)} />}
        </div>
        <TeacherNavbar />
      </div>
      <div className="main w-full flex justify-center">
        <div className="Leftsidebar w-2/12 fixed top-20 left-0 bg-white mt-8  ">
          <div className="top m-8  flex flex-col gap-3">
            <div className="  text-black shadow-sm  border p-2 flex  items-center gap-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#925FE2"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Dashboard
            </div>
            <div className="  text-black shadow-sm border p-2 flex  items-center gap-2 rounded-lg cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#925FE2"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
              Student Analysis
            </div>
            <button
              onClick={() => setShowModal(true)}
              className=" bg-primary text-white shadow-lg p-2 flex  items-center gap-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
                />
              </svg>
              Create Subject
            </button>
          </div>
          <div className="bottom ">
            <div className=" bottom-0 mt-72 ml-7">
              <p className="font-bold my-1">Settings</p>
              {studentDashboardLinksBottom.map((item, index) => (
                <Link to={item.link} key={index}>
                  <div className="item flex gap-4 p-2 items-center  hover:bg-gray-200 hover:rounded-md cursor-pointer">
                    {item.icon}
                    <p className="text-sm">{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="main mx-60 mt-20 p-4 w-full">
          <MainContent />
        </div>

        <div className="Right w-2/12 fixed top-20 right-0  ">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardTeacher;
