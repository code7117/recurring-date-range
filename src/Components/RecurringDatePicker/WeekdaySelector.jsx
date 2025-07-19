import React from "react";
import { useRecurrence } from "../../Context/RecurrenceContext";
const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export default function WeekdaySelector() {
  const { frequency, weekdays, setWeekdays } = useRecurrence();
  if (frequency !== "weekly") return null;

  const toggle = idx =>
    setWeekdays(prev =>
      prev.includes(idx) ? prev.filter(d=>d!==idx) : [...prev,idx]
    );

  return (
    <div className="field">
      <label>On:</label>
      {days.map((d, i) => (
        <button
          key={i}
          onClick={()=>toggle(i)}
          style={{
            margin:4,
            background: weekdays.includes(i) ? "#007bff" : "#eee",
            color: weekdays.includes(i) ? "#fff" : "#000",
            border:"none",
            padding:"6px 10px",
            borderRadius:4,
            cursor:"pointer"
          }}
        >
          {d}
        </button>
      ))}
    </div>
  );
}
