import React from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import WeekdaySelector from "./WeekdaySelector";
import DateRangePicker from "./DateRangePicker";
import CalendarPreview from "./CalendarPreview";
import styles from "./RecurringDatePicker.module.css";

export default function RecurringDatePicker() {
  return (
    <div className={styles.container}>
      <h2>Recurring Date Picker</h2>
      <RecurrenceOptions />
      <WeekdaySelector />
      <DateRangePicker />
      <CalendarPreview />
    </div>
  );
}
