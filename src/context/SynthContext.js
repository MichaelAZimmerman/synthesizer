import React, { useState, createContext } from "react";

export const SynthContext = createContext(null);

export function SynthProvider(props) {
  const [octave, setOctave] = useState(4);
  const [noteType, setNoteType] = useState("8n");
  const [oscType, setOscType] = useState("triangle");
  const [distAmt, setDistAmt] = useState(0);
  const [tremAmt, setTremAmt] = useState(0);
  const [pingPongRate, setPingPongRate] = useState("");
  const [pingPongDepth, setPingPongDepth] = useState(0);
  return (
    <SynthContext.Provider
      value={{
        octave,
        setOctave,
        noteType,
        setNoteType,
        oscType,
        setOscType,

        distAmt,
        setDistAmt,
        tremAmt,
        setTremAmt,
        pingPongRate,
        setPingPongRate,
        pingPongDepth,
        setPingPongDepth,
      }}
    >
      {props.children}
    </SynthContext.Provider>
  );
}
