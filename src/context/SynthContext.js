import React, { useState, createContext } from "react";

export const SynthContext = createContext(null);

export function SynthProvider(props) {
  const [octave, setOctave] = useState(3);
  const [octaveTwo, setOctaveTwo] = useState(4);
  const [noteType, setNoteType] = useState("16n");
  const [oscType, setOscType] = useState("triangle");
  const [oscTypeTwo, setOscTypeTwo] = useState("sine");
  const [distAmt, setDistAmt] = useState(0);
  const [tremAmt, setTremAmt] = useState(0);
  const [pingPongRate, setPingPongRate] = useState(0);
  const [pingPongDepth, setPingPongDepth] = useState(0);
  const [volume, setVolume] = useState(-5);
  const [volumeTwo, setVolumeTwo] = useState(-5);

  return (
    <SynthContext.Provider
      value={{
        octave,
        setOctave,
        octaveTwo,
        setOctaveTwo,
        noteType,
        setNoteType,
        oscType,
        setOscType,
        oscTypeTwo,
        setOscTypeTwo,
        distAmt,
        setDistAmt,
        tremAmt,
        setTremAmt,
        pingPongRate,
        setPingPongRate,
        pingPongDepth,
        setPingPongDepth,
        volume,
        setVolume,
        volumeTwo,
        setVolumeTwo,
      }}
    >
      {props.children}
    </SynthContext.Provider>
  );
}
