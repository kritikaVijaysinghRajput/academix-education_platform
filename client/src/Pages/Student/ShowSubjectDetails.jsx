import React from "react";
import Sidebar from "../../Components/Student/Sidebar";
import StudentNavbar from "../../Components/StudentNavbar";
import AnalyticSidebar from "../../Components/Student/AnalyticSidebar";
import { bannerimg } from "../../assets";
import {
  studentSubjectsSyllabus,
  studentSubjectsUnits,
} from "../../constants/indexStudent";

const SubjectItem = ({ item }) => (
  <div className="item h-16 m-2 w-full cursor-pointer gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-300 flex items-start justify-center">
    {item.icon}
    {item.name}
    <p className="text-xs flex justify-center items-center ml-auto mt-1">
      {item.duedate}
    </p>
  </div>
);

const ShowSubjectDetails = () => {
  return (
    <div className="studentdashboard">
      <div className="navbar fixed top-0 bg-white w-full z-40">
        <StudentNavbar />
      </div>

      <div className="main w-full flex justify-center">
        <div className="sidebar w-2/12 fixed top-20 left-0 bg-white">
          <Sidebar />
        </div>

        <div className="main mx-60 mt-20 p-4 w-full">
          <div className="banner h-36 bg-primary rounded-2xl shadow-sm flex justify-between items-start">
            <div className="bg-primary text-white p-8">
              <p className="text-xl font-semibold mt-10">Cloud Computing</p>
            </div>

            <div>
              <img
                className="float-right m-4 h-32 w-54"
                src={bannerimg}
                alt="Kritika"
              />
            </div>
          </div>

          <div className="content w-5/6 mx-auto">
            <div className="subjectsyllabus-section bg-purple-300 mt-5 rounded-xl shadow p-3 relative border">
              <p>Syllabus</p>
            </div>
            <div className="syllabus flex justify-center items-center">
              {studentSubjectsSyllabus.map((item, index) => (
                <SubjectItem key={index} item={item} />
              ))}
            </div>

            <div className="subjectunit-section bg-purple-300 mt-5 rounded-xl shadow p-3 relative border">
              <p>Units</p>
            </div>
            <div className="units flex flex-col justify-center items-center">
              {studentSubjectsUnits.map((item, index) => (
                <SubjectItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="analysis w-2/12 fixed top-20 right-0">
          <AnalyticSidebar />
        </div>
      </div>
    </div>
  );
};

export default ShowSubjectDetails;
