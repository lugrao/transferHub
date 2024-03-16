import "./SearchPanel.css";
import { Link } from "react-router-dom";
import SearchLocationInput from "./SearchLocationInput";
import DatePickerInput from "./DatePickerInput";

export default function SearchPanel() {
  return (
    <div className="search-panel">
      <form action="">
        <div className="form-field">
          <SearchLocationInput label="Origen" id="origin" />
        </div>
        <div className="form-field">
          <SearchLocationInput label="Destino" id="destination" />
        </div>
        <div className="form-field">
          <DatePickerInput />
        </div>
        <div className="form-field">
          <label htmlFor="time">Hora</label>
          <input type="time" name="time" id="time" />
        </div>
        <div className="form-field">
          <label htmlFor="passengers">Pasajeros</label>
          <select name="passengers" id="passengers">
            {Array.from({ length: 15 }, (_, i) => i + 1).map((i) => {
              return (
                <option value={i} key={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
        <Link to={`/search`}>
          <input className="button" type="submit" value="Buscar" />
        </Link>
      </form>
    </div>
  );
}
