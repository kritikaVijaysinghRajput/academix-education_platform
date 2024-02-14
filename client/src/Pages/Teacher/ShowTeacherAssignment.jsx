import React from "react";
import LeftSidebar from "../../Components/Teacher/LeftSidebar";
import TeacherNavbar from "../../Components/TeacherNavbar";
import AnalyticSidebarTeacher from "../../Components/Teacher/AnalyticSidebarTeacher";
import { TeacherAssignments } from "../../constants/indexTeacher";
import { Link } from "react-router-dom";

const SubjectItem = ({ item }) => (
  <div className="item h-16 m-2 w-full cursor-pointer gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-300 flex items-start justify-center">
    {item.icon}
    {item.name}
    <p className="text-xs flex justify-center items-center ml-auto mt-1 gap-4">
      {item.duedate}
      <Link to="/teacherSubject">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#925FE2"
          class="w-6 h-6 "
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
            clip-rule="evenodd"
          />
        </svg>
      </Link>
    </p>
  </div>
);

const ShowTeacherAssignment = () => {
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
          <div className="content w-5/6 mx-auto ">
            <div className=" bg-purple-300 mt-5 shadow-md rounded-xl  p-5 text-center relative border">
              <p>Assignment</p>
            </div>
            <div className="Assignment flex flex-wrap justify-around items-start p-4">
              {TeacherAssignments.map((item, index) => (
                <SubjectItem key={index} item={item} />
              ))}
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

export default ShowTeacherAssignment;
