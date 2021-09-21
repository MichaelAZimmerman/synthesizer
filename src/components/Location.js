import React, { useRef, useState, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { LocationContext } from "../context";
import * as Tone from "tone";
import Sketch from "react-p5";

const baseUrl =
  "https://api.weatherapi.com/v1/current.json?key=70c6d31abc674143ac2155929212507&q=";

const Location = () => {
  const [toggle, setToggle] = useState(null);
  const [droneTrem, setDroneTrem] = useState(0);
  const { search, setSearch } = useContext(LocationContext);
  const { oscOnePitch, setOscOnePitch } = useContext(LocationContext);
  const { oscTwoPitch, setOscTwoPitch } = useContext(LocationContext);
  const { oscThreePitch, setOscThreePitch } = useContext(LocationContext);
  const { oscFourPitch, setOscFourPitch } = useContext(LocationContext);
  const tremolo = new Tone.Tremolo(droneTrem, 0.5).toDestination();
  const comp = new Tone.Compressor(-30, 3);
  const drone = new Tone.PolySynth(Tone.FMSynth).chain(tremolo, comp);
  const meter = new Tone.Meter();
  const analyser = new Tone.Analyser("waveform", 512);
  Tone.Destination.connect(analyser);
  const searchRef = useRef(null);
  const { callAPI: locationCall } = useFetch("GET");
  const [error, setError] = useState(null);

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(350, 400, p5.WEBGL).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(34, 97, 74, 255);
    p5.stroke(74, 212, 109, 255);
    p5.strokeWeight(1);
    p5.fill(0, 0, 0, 150);
    p5.rect(-174, -75, 348, 150);
    p5.fill(74, 212, 109, 255);
    // satellite parameters
    const dim = Math.min(175, 175);
    const time = p5.millis() / 1000;
    const speed = 0.1;
    const angle = time * p5.PI * 2.0 * speed;
    const u = Math.cos(angle);
    const v = Math.sin(angle);
    const radius = dim * 0.37;
    const px = 0 + u * radius;
    const py = 0 + v * radius;
    const r = dim * 0.05;
    // draw satellite
    p5.ellipse(px, py, r, r);
    // make outline of globe
    p5.noFill();
    p5.strokeWeight(2);
    p5.circle(0, 0, 104);
    p5.strokeWeight(1);

    // draw line
    if (search.location && !error) {
      p5.beginShape();
      p5.vertex(-60, -112);
      p5.vertex(-60, -60);
      p5.vertex(-50, -50);
      p5.endShape();
      p5.fill(34, 97, 74, 200);
      p5.rect(-174, -199, 348, 87);
      const values = analyser.getValue();

      // p5.fill(74, 212, 109, 125);

      // p5.circle(175, 20, -100 * 0.1 * scale);

      // if (play) {

      p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i];
        const x = p5.map(i, 175, values.length - 1, 0, 350);
        const y = 100 + amplitude * -20;
        // Place vertex
        p5.vertex(x, y);
      }
      p5.endShape();
    }
    // end line
    // draw rotating sphere
    p5.ambientLight(100, 100, 100);
    p5.pointLight(255, 255, 255, px, py, 70);
    p5.shininess(20);
    p5.rotateY(p5.millis() / 3000);
    p5.sphere(50, 12, 12);
    // draw rotating globe scan line
    p5.rotateX(p5.millis() / 2000);
    p5.noFill();
    p5.stroke(74, 212, 109);
    p5.strokeWeight(2);
    p5.circle(0, 0, 104);
  };
  return (
    <>
      <form className="location-search">
        <div>
          <label htmlFor="search">Search City Name:</label>
          <input
            id="search"
            ref={searchRef}
            placeholder="Omaha, for example."
            className="search-input"
          />
        </div>
        <button
          className="search-btn"
          onClick={async (e) => {
            drone.triggerRelease([
              oscOnePitch,
              oscTwoPitch,
              oscThreePitch,
              oscFourPitch,
            ]);
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
            setOscOnePitch(Math.floor(res.current.temp_c));
            setOscTwoPitch(Math.floor(res.current.temp_f));
            setOscThreePitch(Math.floor(res.current.feelslike_c));
            setOscFourPitch(Math.floor(res.current.feelslike_f));
            setDroneTrem(Math.floor(res.current.wind_mph));
            setToggle(false);
          }}
        >
          Search Location Drone
        </button>
      </form>
      {error && <div className="text-center drone-error">{error}</div>}
      {search.location && !error && (
        <div className="location">
          <div>Location drone generated for:</div>
          <div>
            {search.location.name}, {search.location.region} in{" "}
            {search.location.country}
          </div>
        </div>
      )}
      <div className="location-start">
        {search.location && (
          <button
            className="drone-play"
            onClick={() => {
              tremolo.start();
              drone.triggerRelease([
                oscOnePitch,
                oscTwoPitch,
                oscThreePitch,
                oscFourPitch,
              ]);
              drone.triggerAttack([
                oscOnePitch,
                oscTwoPitch,
                oscThreePitch,
                oscFourPitch,
              ]);
            }}
          >
            Play Drone
          </button>
        )}
        {search.location && (
          <button
            className="drone-stop"
            onClick={() => {
              drone.triggerRelease([
                oscOnePitch,
                oscTwoPitch,
                oscThreePitch,
                oscFourPitch,
              ]);
            }}
          >
            Stop Drone
          </button>
        )}
      </div>
      <div className="visualizer-drone">
        <Sketch setup={setup} draw={draw} />
      </div>
      {!search.location && (
        <div className="location-scan">Scanning Earth...</div>
      )}
      {search.location && (
        <div className="drone-parameters">
          <div className="drone-title">Temperature </div>
          <div className="drone-subtitle">(Osc. Pitch 1-2):</div>
          <div>{Math.floor(search.current.temp_c)} Degrees Celsius</div>
          <div>{Math.floor(search.current.temp_f)} Degrees Fahrenheit</div>
          <div className="drone-title">Feels Like </div>
          <div className="drone-subtitle">(Osc. Pitch 3-4):</div>
          <div>{Math.floor(search.current.feelslike_c)} Degrees Celsius</div>
          <div>{Math.floor(search.current.feelslike_f)} Degrees Fahrenheit</div>
          <div className="drone-title">Wind Speed </div>
          <div className="drone-subtitle">(Tremolo Rate):</div>
          <div>{Math.floor(search.current.wind_mph)} MPH</div>
        </div>
      )}
    </>
  );
};

export default Location;
