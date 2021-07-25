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
      </form>
    </>
  );
};

export default Location;
