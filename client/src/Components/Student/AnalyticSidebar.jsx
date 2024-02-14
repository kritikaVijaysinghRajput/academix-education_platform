import React from "react";
import { graph, user } from "../../assets";
import { studentDashboardMentors } from "../../constants/indexStudent";

const AnalyticSidebar = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-sm font-semibold mb-4 text-primary">Your Profile</p>

        <div className="rounded-full overflow-hidden border-4 border-primary mb-4">
          <img src={user} alt="Profile" className="w-20 h-20 object-cover" />
        </div>

        <p className="text-xl font-semibold mb-2">Kritika Rajput</p>

        <p className="text-sm text-gray-500 mb-4">MCA I</p>

        <img src={graph} alt="Graph" />

        <p className="text-sm font-semibold mt-6 text-primary">Your Mentors</p>

        <div className="mt-4">
          {studentDashboardMentors.map((item, index) => (
            <div className="item flex gap-3 p-2 items-center">
              <div className="item w-8 h-8 ">{item.image}</div>
              <div>
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticSidebar;
