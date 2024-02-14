import React, { useState } from "react";
import {
  teacherDashboardLinksBottom,
  teacherDashboardLinksTop,
} from "../../constants/indexTeacher";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div className="sidebar rounded-sm max-w-[250px] overflow-hidden ">
      <div className="top p-7">
        <button className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
              clipRule="evenodd"
            />
          </svg>

          <p className="font-bold my-4 ">Overview</p>
        </button>

        {teacherDashboardLinksTop.map((item, index) => (
          <Link to={item.link} key={index}>
            <div
              className="item flex gap-4 p-2 items-center hover:bg-gray-200 hover:rounded-md cursor-pointer"
              key={index}
            >
              {item.icon}
              {item.name}
            </div>
          </Link>
        ))}
      </div>

      <div className="bottom">
        <div className="bottom-0 mt-5 ml-7">
          <p className="font-bold my-1">Settings</p>
          {teacherDashboardLinksBottom.map((item, index) => (
            <Link to={item.link} key={index}>
              <div
                className="item flex gap-4 p-2 items-center hover:bg-gray-200 hover:rounded-md cursor-pointer"
                key={index}
              >
                {item.icon}
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
