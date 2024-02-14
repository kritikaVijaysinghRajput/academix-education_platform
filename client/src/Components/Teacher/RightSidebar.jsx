import React from "react";
import CalendarBox from "../widgets/CalendarBox";

const RightSidebar = () => {
  return (
    <div>
      <div className="flex flex-col  items-center">
        <div className="calendar">
          <CalendarBox />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
