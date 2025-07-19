import { addDays, addWeeks, addMonths, addYears, isBefore } from "date-fns";

export function generateRecurringDates({ frequency, interval, startDate, endDate, weekdays }) {
  const results = [];
  let current = new Date(startDate);
  const end = endDate ? new Date(endDate) : addYears(current, 1);

  while (!isBefore(end, current)) {
    if (frequency === "weekly" && weekdays.includes(current.getDay())) {
      results.push(new Date(current));
    } else if (frequency !== "weekly") {
      results.push(new Date(current));
    }

    if (frequency === "daily") current = addDays(current, interval);
    if (frequency === "weekly") current = addWeeks(current, interval);
    if (frequency === "monthly") current = addMonths(current, interval);
    if (frequency === "yearly") current = addYears(current, interval);
  }

  return results;
}
