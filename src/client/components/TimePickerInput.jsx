import "./TimePickerInput.css";
import { TimePicker } from "antd";

export default function TimePickerInput() {
  return (
    <div className="time-picker-input-wrapper">
      <label htmlFor="time">Hora</label>
      <TimePicker
        className="time-picker-input"
        name="time"
        id="time"
        onChange={(time, timeString) => {
          console.log(time);
          console.log(timeString);
        }}
        format="HH:mm"
        placeholder=""
      />
    </div>
  );
}
