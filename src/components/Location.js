import React, { useRef, useState, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { LocationContext } from "../context";
const baseUrl =
  "http://api.weatherapi.com/v1/current.json?key=70c6d31abc674143ac2155929212507&q=";

const Location = () => {
  const { search, setSearch } = useContext(LocationContext);
  const searchRef = useRef(null);
  const { callAPI: locationCall } = useFetch("GET");
  const [error, setError] = useState(null);
  return (
    <>
      <form>
        <div>
          <label htmlFor="search">Search City Name:</label>
          <input
            id="search"
            ref={searchRef}
            placeholder="Omaha, for example."
          />
        </div>
        <button
          onClick={async (e) => {
            e.preventDefault();
            setError(null);
            if (searchRef.current.value.length < 3) {
              return setError("Must be at least 3 characters in search.");
            }
            const res = await locationCall(baseUrl + searchRef.current.value);
            if (res.error) {
              return setError(res.error);
            }
            setSearch(res);
            console.log(res.current);
          }}
        >
          Search Weather Drone
        </button>
      </form>
      {error && <div className="text-center">{error}</div>}
      {search && !error && (
        <>
          <div>Weather drone completed for:</div>
          <div>
            {search.location.name} in {search.location.country}
          </div>
          <button>Play Drone</button>
        </>
      )}
    </>
  );
};

export default Location;
