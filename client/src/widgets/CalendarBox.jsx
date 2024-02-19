import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarBox() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex justify-center items-center p-2">
      <div className="w-4/5 max-w-full">
        <div className="shadow-sm p-1 bg-primary ">
          <Calendar
            onChange={handleDateChange}
            className="bg-transparent"
            value={date}
          />
        </div>
        <h1 className="text-sm text-primary font-semibold mb-4">
          Today Date: {date.toDateString()}
        </h1>
      </div>
    </div>
  );
}
