import React from "react";
import LeftSidebar from "../../Components/Teacher/LeftSidebar";
import TeacherNavbar from "../../Components/TeacherNavbar";
import {
  assignmentimg,
  quizimg,
  shareresourceImg,
  writingpad,
} from "../../assets";
import AnalyticSidebarTeacher from "../../Components/Teacher/AnalyticSidebarTeacher";
import { Link } from "react-router-dom";

const TeacherSubjectDashboard = () => {
  return (
    <div className="teachersubjectdashboard">
      <div className="navbar fixed top-0 bg-white w-full z-40">
        <TeacherNavbar />
      </div>
      <div className="main w-full flex justify-center">
        <div className="Leftsidebar w-2/12 fixed top-20 left-0 bg-white   ">
          <LeftSidebar />
        </div>
        <div className="main mx-60 mt-20 p-4 w-full">
          <div className="flex justify-center">
            <img src={writingpad} alt="" />
          </div>
          <div className="flex gap-5 p-4 m-4 justify-center">
            <div className="flex bg-white shadow-md h-52 w-52  border border-purple-500">
              <div>
                <img className=" h-44 w-full " src={shareresourceImg} alt="" />
                <Link
                  to="/createShareResources"
                  className=" bg-primary text-white shadow-lg p-3 w-full flex items-center justify-center gap-3 rounded-b-2xl hover:bg-purple-400 "
                >
                  <p className="text-sm">Share Resources</p>
                </Link>
              </div>
            </div>
            <div className="flex bg-white shadow-md h-52 w-52  border border-purple-500">
              <div>
                <img className=" h-44 w-full " src={quizimg} alt="" />
                <Link
                  to="/createQuiz"
                  className=" bg-primary text-white shadow-lg p-3 w-full flex items-center justify-center gap-3 rounded-b-2xl hover:bg-purple-400 "
                >
                  <p className="text-sm">Create Quiz</p>
                </Link>
              </div>
            </div>

            <div className="flex bg-white shadow-md h-52 w-52  border border-purple-500">
              <div>
                <img className=" h-44 w-96 " src={assignmentimg} alt="" />
                <Link
                  to="/createAssignment"
                  className=" bg-primary text-white shadow-lg p-3 w-full flex items-center justify-center gap-3 rounded-b-2xl hover:bg-purple-400 "
                >
                  <p className="text-sm">Create Assignment</p>
                </Link>
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

export default TeacherSubjectDashboard;
