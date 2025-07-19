import React, { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [frequency, setFrequency] = useState("weekly");
  const [interval, setInterval] = useState(1);
  const [weekdays, setWeekdays] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <RecurrenceContext.Provider
      value={{
        frequency, setFrequency,
        interval, setInterval,
        weekdays, setWeekdays,
        startDate, setStartDate,
        endDate, setEndDate
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
