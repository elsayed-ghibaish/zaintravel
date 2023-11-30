"use client";
import React, { useState } from "react";
import { addDays, eachDayOfInterval, format, isBefore, getDay } from "date-fns";
import { ar } from "date-fns/locale";

const FilteredDays = ({ enabled }:any) => {
  const currentDate = addDays(new Date(), 1);
  const BookingDays = 10;
  const inputStartDate = new Date();
  const inputEndDate = addDays(inputStartDate, BookingDays);
  const startDate = inputStartDate;
  const endDate = inputEndDate;

  const availableDays = eachDayOfInterval({ start: startDate, end: endDate })
    .filter((day) => isBefore(new Date(), day) && (enabled ? getDay(day) !== 5 : true))
    .map((day) => ({
      value: format(day, "yyyy-MM-dd"),
      label: format(day, "EEEE, d MMMM yyyy", { locale: ar }),
    }));

  return (
    <div>
      <h3>Available Days:</h3>
      <ul>
        {availableDays.map((day, index) => (
          <li key={index}>{day.label}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [filterEnabled, setFilterEnabled] = useState(true);

  const toggleFilter = () => {
    setFilterEnabled(!filterEnabled);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={filterEnabled} onChange={toggleFilter} />
        Enable Filter
      </label>
      <FilteredDays enabled={filterEnabled} />
    </div>
  );
};

export default App;
