import "./SearchPanel.css";
import { Link } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export default function SearchPanel() {
  return (
    <div className="search-panel">
      <form action="">
        <div className="form-field">
          <label htmlFor="origin">Origen</label>
          <Autocomplete
            name="origin"
            id="origin"
            apiKey={GOOGLE_API_KEY}
            onPlaceSelected={(place) => {
              console.log(place);
              console.log(place.geometry.location.lat());
              console.log(place.geometry.location.lng());
            }}
            options={{ types: [] }}
            placeholder=""
          />
        </div>
        <div className="form-field">
          <label htmlFor="destination">Destino</label>
          <Autocomplete
            name="destination"
            id="destination"
            apiKey={GOOGLE_API_KEY}
            onPlaceSelected={(place) => {
              console.log(place);
              console.log(place.geometry.location.lat());
              console.log(place.geometry.location.lng());
            }}
            options={{ types: [] }}
            placeholder=""
          />
        </div>
        <div className="form-field">
          <label htmlFor="date">Fecha</label>
          <input type="date" name="date" id="date" />
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
