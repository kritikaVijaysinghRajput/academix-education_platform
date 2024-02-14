import React from "react";
import Sidebar from "../../Components/Student/Sidebar";
import StudentNavbar from "../../Components/StudentNavbar";
import AnalyticSidebar from "../../Components/Student/AnalyticSidebar";
import { studentAssignments } from "../../constants/indexStudent";

const SubjectItem = ({ item }) => (
  <div className="item h-16 m-2 w-full cursor-pointer gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-300 flex items-start justify-center">
    {item.icon}
    {item.name}
    <p className="text-xs flex justify-center items-center ml-auto mt-1">
      {item.duedate}
    </p>
  </div>
);

const ShowstudentAssignments = () => {
  return (
    <div className="studentassignment">
      <div className="navbar fixed top-0 bg-white w-full z-40">
        <StudentNavbar />
      </div>

      <div className="main w-full flex justify-center">
        <div className="sidebar w-2/12 fixed top-20 left-0 bg-white">
          <Sidebar />
        </div>
        return (
        <div className="main w-full flex justify-center">
          <div className="sidebar w-2/12 fixed top-20 left-0 bg-white">
            <Sidebar />
          </div>
          <div className="main mx-60 mt-20 p-4">
            <div className="middlemain flex items-center justify-center">
              <div className="content w-5/6 mx-auto ">
                <div className=" bg-purple-300 mt-5 shadow-md rounded-xl  p-5 text-center relative border">
                  <p>Assignment</p>
                </div>
                <div className="Assignment flex flex-wrap justify-around items-start p-4">
                  {studentAssignments.map((item, index) => (
                    <SubjectItem key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="analysis w-2/12 fixed top-20 right-0">
            <AnalyticSidebar />
          </div>
        </div>
        );
        <div className="analysis w-2/12 fixed top-20 right-0">
          <AnalyticSidebar />
        </div>
      </div>
    </div>
  );
};

export default ShowstudentAssignments;
