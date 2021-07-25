import React from "react";

const About = () => {
  return (
    <>
      <div className="about">
        This app is for messing around with synthesizer effects and settings
        using Tone.js. It currently struggles with the Safari browser and smart
        phone browsers. The location drone feature searches for cities
        world-wide and generates a 3-oscillator drone based upon the current
        weather in that location.
      </div>
    </>
  );
};

export default About;
