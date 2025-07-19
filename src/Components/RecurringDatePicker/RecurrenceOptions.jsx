import React from "react";
import { useRecurrence } from "../../Context/RecurrenceContext";

export default function RecurrenceOptions() {
  const { frequency, setFrequency, interval, setInterval } = useRecurrence();

  return (
    <div className="field">
      <label>Repeat:</label>
      <select value={frequency} onChange={e => setFrequency(e.target.value)}>
        {["daily","weekly","monthly","yearly"].map(f => (
          <option key={f} value={f}>{f.charAt(0).toUpperCase()+f.slice(1)}</option>
        ))}
      </select>

      <label style={{marginLeft:20}}>Every</label>
      <input
        type="number"
        value={interval}
        onChange={e => setInterval(Number(e.target.value))}
        min={1}
        style={{width:50}}
      />
      <span style={{marginLeft:8}}>{frequency}</span>
    </div>
  );
}
