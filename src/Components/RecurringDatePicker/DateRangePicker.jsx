import React from "react";
import { useRecurrence } from "../../Context/RecurrenceContext";

export default function DateRangePicker() {
  const { startDate, setStartDate, endDate, setEndDate } = useRecurrence();

  return (
    <div className="field">
      <label>Start Date:</label>
      <input type="date" value={startDate} onChange={e=>setStartDate(e.target.value)} />

      <label style={{marginLeft:20}}>End Date (opt):</label>
      <input type="date" value={endDate} onChange={e=>setEndDate(e.target.value)} />
    </div>
  );
}

