import React from "react";
import { useRecurrence } from "../../Context/RecurrenceContext";
import { generateRecurringDates } from "../../Utils/Utils";

export default function CalendarPreview() {
  const { frequency, interval, weekdays, startDate, endDate } = useRecurrence();

  if (!startDate) return <p>Please pick a start date.</p>;

  const dates = generateRecurringDates({ frequency, interval, weekdays, startDate, endDate }).slice(0, 10);

  return (
    <div className="field">
      <h4>Upcoming Dates (first 10):</h4>
      <ul>
        {dates.map((d,i) => <li key={i}>{d.toDateString()}</li>)}
      </ul>
    </div>
  );
}
