import "./SearchPanel.css";

export default function SearchPanel() {
  return (
    <div className="search-panel">
      <form action="">
        <div className="form-field">
          <label htmlFor="origin">Origen</label>
          <input type="text" name="origin" id="origin" />
        </div>

        <div className="form-field">
          <label htmlFor="destination">Destino</label>
          <input type="text" name="destination" id="destination" />
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
              return <option value={i}>{i}</option>;
            })}
          </select>
        </div>

        <input className="button" type="submit" value="Buscar" />
      </form>
    </div>
  );
}
