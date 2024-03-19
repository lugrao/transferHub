import "./SearchLocationInput.css";
import { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";

export default function SearchLocationInput({ label, id }) {
  const {
    placesService,
    placePredictions,
    getPlacePredictions,
    isPlacePredictionsLoading,
  } = useGoogle({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    debounce: 600,
    language: "es",
  });
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    !value && setOptions([]);
  }, [value]);

  useEffect(() => {
    placePredictions.length &&
      setOptions([
        ...placePredictions.map((i) => ({
          label: i.description,
          value: i.description,
        })),
      ]);
    isPlacePredictionsLoading && setOptions([]);
  }, [placePredictions, isPlacePredictionsLoading]);

  return (
    <div className="search-location-input-wrapper">
      <label htmlFor={id}>{label}</label>
      <AutoComplete
        className="autocomplete"
        name={id}
        id={id}
        options={options}
        onSearch={(data) => {
          getPlacePredictions({ input: data });
          setValue(data);
        }}
        value={value}
        onSelect={(data) => {
          console.log("onSelect", data);
          console.log("placePredictions data", placePredictions);
          console.log(
            "placesService detail",
            placesService.getDetails(
              {
                placeId: placePredictions.filter(
                  (place) => place.description === data
                )[0].place_id,
              },
              (placeDetails) =>
                console.log({
                  lat: placeDetails.geometry.location.lat(),
                  lng: placeDetails.geometry.location.lng(),
                })
            )
          );
          setValue(data);
        }}
      />
    </div>
  );
}
