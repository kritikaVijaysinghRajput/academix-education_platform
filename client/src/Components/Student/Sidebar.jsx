import React from "react";
import {
  studentDashboardLinksTop,
  studentDashboardLinksBottom,
} from "../../constants/indexStudent";
import { Link } from "react-router-dom";
const LeftSidebar = () => {
  return (
    <div className="sidebar rounded-sm   ">
      <div className="top p-7">
        <p className="font-bold my-4 ">Overview</p>
        {studentDashboardLinksTop.map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="item flex gap-4 p-2 items-center hover:bg-gray-200 hover:rounded-md cursor-pointer">
              {item.icon}

              <p className="text-sm">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="bottom ">
        <div className=" bottom-0 mt-5 ml-7">
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
  );
};

export default LeftSidebar;
