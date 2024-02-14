import React, { useState } from "react";
import Sidebar from "../../Components/Student/Sidebar";
import StudentNavbar from "../../Components/StudentNavbar";
import AnalyticSidebar from "../../Components/Student/AnalyticSidebar";
import { Attendancegraph, Overallscore, bannerimg } from "../../assets";
import { studentremainingTodoList } from "../../constants/indexStudent";

const StudentDashboard = () => {
  return (
    <div className="studentdashboard">
      <div className="navbar fixed top-0 bg-white w-full z-40">
        <StudentNavbar />
      </div>

      <div className="main w-full flex justify-center">
        <div className="sidebar w-2/12 fixed top-20 left-0 bg-white   ">
          <Sidebar />
        </div>
        <div className="main mx-60 mt-20 p-4 ">
          <div className="banner h-40 w-full bg-primary rounded-2xl shadow-sm flex justify-between items-start">
            <div className="bg-primary text-white p-8">
              <p className="text-xl font-bold mt-5">Welcome back, Kritika!</p>
              <p className="text-sm  ">
                Always stay updated in your student portal
              </p>
            </div>
            <div>
              <img
                className="float-right m-4 h-36 w-54 "
                src={bannerimg}
                alt="Kritika"
              />
            </div>
          </div>
          <div className="graph flex gap-2 p-2 items-center justify-between  ">
            <div className="attendance">
              <p className=" text-sm  mb-10">Attendance</p>
              <img className=" h-60 w-full" src={Attendancegraph} alt="" />
            </div>
            <div className="score">
              <p className=" text-sm mb-10">Overall Score</p>
              <img className=" h-60 w-full" src={Overallscore} alt="" />
            </div>
          </div>
          <div className="todo ">
            <p className=" text-sm mb-2">Remaining to do</p>
            {studentremainingTodoList.map((item, index) => (
              <div className="item h-16 m-2 w-full gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-300 flex items-start">
                {item.duedate}
                <p className="text-lg">{item.subjectName}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="analysis w-2/12 fixed top-20 right-0  ">
          <AnalyticSidebar />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
