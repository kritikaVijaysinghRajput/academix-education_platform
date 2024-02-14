import React from "react";
import StudentNavbar from "../../Components/StudentNavbar";
import Sidebar from "../../Components/Student/Sidebar";
import AnalyticSidebar from "../../Components/Student/AnalyticSidebar";
import { studentSubjectsList } from "../../constants/indexStudent";
import { Link } from "react-router-dom";

const colorArray = [
  "bg-[#45B081]",
  "bg-[#625CA5]",
  "bg-[#BBAB8C]",
  "bg-[#E6BB4D]",
  "bg-[#FF90BC]",
];
const SubjectsPage = () => {
  return (
    <div className="subjectspage">
      <div className="navbar fixed top-0 bg-white w-full z-40">
        <StudentNavbar />
      </div>
      <div className="main w-full flex justify-center">
        <div className="sidebar w-2/12 fixed top-20 left-0 bg-white   ">
          <Sidebar />
        </div>

        <div className="middle mx-60 mt-20 p-4">
          <p className="-ml-80">Subjects</p>
          <div className="grid grid-cols-3 gap-4 mt-2 p-6 cursor-pointer">
            {studentSubjectsList.map((item, index) => (
              <Link to={item.link} key={index}>
                <div
                  key={index}
                  className={`bg-white border  mr-4 rounded-2xl h-52 w-60 transition-transform transform hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className="items-center">
                    <div
                      className={`item w-full h-28 shadow-lg rounded-t-2xl ${
                        colorArray[index % colorArray.length]
                      } cursor-pointer`}
                    >
                      <div className="text-white p-3">
                        <p className="text-xl">{item.subjectName}</p>
                        <p className="text-white text-xs">{item.class}</p>
                      </div>
                      <p className="text-xs text-white mt-5 p-2">
                        {item.teacherName}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="analysis w-2/12 fixed top-20 right-0  ">
        <AnalyticSidebar />
      </div>
    </div>
  );
};

export default SubjectsPage;
