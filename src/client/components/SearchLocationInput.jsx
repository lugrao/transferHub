import "./SearchLocationInput.css";
import { useEffect, useRef, useState } from "react";
import { Input, List, AutoComplete } from "antd";
import useDetectOutsideClick from "../hooks/useDetectOutsideClick";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";

export default function SearchLocationInput({ label, id }) {
  const inputRef = useRef(null);
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
      debounce: 800,
    });
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");
  const [isList, setIsList] = useState(false);
  useDetectOutsideClick(inputRef, () => setIsList(false));

  console.log("options", options);
  // console.log(placePredictions);
  // console.log([...placePredictions.map((i) => i.description)]);

  return (
    <>
      {/* <div className="input-wrapper" ref={inputRef}>
        <label htmlFor={id}>{label}</label>
        <Input.Search
          name={id}
          id={id}
          value={value}
          onChange={(e) => {
            getPlacePredictions({ input: e.target.value });
            setValue(e.target.value);
            setIsList(Boolean(e.target.value));
          }}
          loading={isPlacePredictionsLoading}
        />
        {!isPlacePredictionsLoading && isList && (
          <div className="list">
            <List
              locale={{ emptyText: "No se encontró ningún sitio." }}
              dataSource={placePredictions}
              renderItem={(item) => (
                <List.Item
                  className="list-item"
                  onClick={() => {
                    setValue(item.description);
                    setIsList(false);
                  }}
                >
                  <List.Item.Meta
                    title={item.description}
                    className="list-item-text"
                  />
                </List.Item>
              )}
            />
          </div>
        )}
      </div> */}
      <div>
        <AutoComplete
          options={options}
          style={{
            width: 200,
          }}
          onSearch={(data) => {
            getPlacePredictions({ input: data });
            setOptions([
              ...placePredictions.map((i) => ({
                label: i.description,
                value: i.description,
              })),
            ]);
            // console.log("options", options);
            setValue(data);
            setIsList(Boolean(data));
          }}
          value={value}
          onSelect={(data) => {
            console.log("onSelect", data);
            setValue(data)
            // setIsList(false);
          }}
          // onSearch={(text) => setOptions(getPanelValue(text))}
          // onSearch={() => console.log("SEARCHED")}
          // placeholder="input here"
          // notFoundContent="No se encontró nada."
          // open={!isPlacePredictionsLoading && isList}
        >
          <Input.Search
            // name={id}
            // id={id}
            // value={value}
            // onChange={(data) => {
            //   getPlacePredictions({ input: data });
            //   setOptions([
            //     ...placePredictions.map((i) => ({
            //       label: i.description,
            //       value: i.description,
            //     })),
            //   ]);
            //   // console.log("options", options);
            //   setValue(data);
            //   setIsList(Boolean(data));
            // }}
            loading={isPlacePredictionsLoading}
          />
        </AutoComplete>
      </div>
    </>
  );
}
