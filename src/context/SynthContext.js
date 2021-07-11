import React, { useState, createContext } from "react";

export const SynthContext = createContext(null);

export function SynthProvider(props) {
  const [octave, setOctave] = useState(4);
  const [noteType, setNoteType] = useState("8n");
  const [oscType, setOscType] = useState("triangle");
  const [distAmt, setDistAmt] = useState(0);
  const [tremAmt, setTremAmt] = useState(0);
  const [pingPongRate, setPingPongRate] = useState(0);
  const [pingPongDepth, setPingPongDepth] = useState(0);
  const [attack, setAttack] = useState(0.1);
  const [decay, setDecay] = useState(0.2);
  const [sustain, setSustain] = useState(0.5);
  const [release, setRelease] = useState(0.8);
  return (
    <SynthContext.Provider
      value={{
        octave,
        setOctave,
        noteType,
        setNoteType,
        oscType,
        setOscType,
        attack,
        setAttack,
        decay,
        setDecay,
        sustain,
        setSustain,
        release,
        setRelease,
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
