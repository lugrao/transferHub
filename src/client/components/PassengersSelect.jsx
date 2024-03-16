import "./PassengersSelect.css";
import { Select } from "antd";

export default function PassengersSelect() {
  return (
    <div className="passengers-select-wrapper">
      <label htmlFor="passengers">Pasajeros</label>
      <Select
        className="select"
        name="passengers"
        id="passengers"
        defaultValue={1}
        onChange={(value) => console.log(value)}
        options={Array.from({ length: 15 }, (_, i) => i + 1).map((i) => {
          return {
            value: i,
            label: i,
          };
        })}
      />
    </div>
  );
}
