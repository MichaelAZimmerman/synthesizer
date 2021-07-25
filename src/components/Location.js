import React, { useRef, useState, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { LocationContext } from "../context";
import * as Tone from "tone";

const baseUrl =
  "http://api.weatherapi.com/v1/current.json?key=70c6d31abc674143ac2155929212507&q=";

const Location = () => {
  const [droneTrem, setDroneTrem] = useState(0);
  const { search, setSearch } = useContext(LocationContext);
  const { oscOnePitch, setOscOnePitch } = useContext(LocationContext);
  const { oscTwoPitch, setOscTwoPitch } = useContext(LocationContext);
  const { oscThreePitch, setOscThreePitch } = useContext(LocationContext);
  const tremolo = new Tone.Tremolo(droneTrem, 0.5).toDestination();
  const comp = new Tone.Compressor(-30, 3);
  const drone = new Tone.PolySynth(Tone.FMSynth).chain(tremolo, comp);
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
            drone.triggerRelease([oscOnePitch, oscTwoPitch, oscThreePitch]);
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
            setOscOnePitch(Math.floor(res.current.temp_c * 5));
            setOscTwoPitch(Math.floor(res.current.temp_f * 6));
            setOscThreePitch(Math.floor(res.current.humidity * 7));
            setDroneTrem(res.current.wind_mph);

            console.log(res.current);
          }}
        >
          Search Weather Drone
        </button>
      </form>
      {error && <div className="text-center">{error}</div>}
      {search.location && !error && (
        <>
          <div>Weather drone generated for:</div>
          <div>
            {search.location.name}, {search.location.region} in{" "}
            {search.location.country}
          </div>
          <button
            onClick={() => {
              tremolo.start();
              drone.triggerRelease([oscOnePitch, oscTwoPitch, oscThreePitch]);
              drone.triggerAttack([oscOnePitch, oscTwoPitch, oscThreePitch]);
            }}
          >
            Play Drone
          </button>
          <button
            onClick={() => {
              drone.triggerRelease([oscOnePitch, oscTwoPitch, oscThreePitch]);
            }}
          >
            Stop Drone
          </button>
        </>
      )}
    </>
  );
};

export default Location;
