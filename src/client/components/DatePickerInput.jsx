import "./DatePickerInput.css";
import { DatePicker } from "antd";

export default function DatePickerInput() {
  return (
    <div className="date-picker-input-wrapper">
      <label htmlFor="date">Fecha</label>
      <DatePicker
        name="date"
        id="date"
        onChange={(date, dateString) => {
          console.log("date", date);
          console.log("dateString", dateString);
        }}
        placeholder=""
      />
    </div>
  );
}
