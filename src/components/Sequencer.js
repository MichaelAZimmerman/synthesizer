import React, { useEffect, useContext, useState } from "react";
import * as Tone from "tone";
import { SequencerContext } from "../context";
import BassDrum from "./Sequences/BassDrum";

export default function Sequencer() {
  const { createSequence, sequence, setSequence } =
    useContext(SequencerContext);
  //   create a synth
  const synth = new Tone.MembraneSynth().toDestination();
  // create an array of notes to be played
  const [notes, setNotes] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  //   // create a new sequence with the synth and notes

  const synthPart = new Tone.Sequence(
    function (time, note) {
      synth.triggerAttackRelease(note, "10hz", time);
    },
    notes,
    "16n"
  );
  return (
    <div>
      <BassDrum notes={notes} setNotes={setNotes} synth={synth} />
      <br />
      {/* start button */}
      <button
        onClick={() => {
          synthPart.start();
          Tone.Transport.start();
        }}
      >
        start
      </button>
      {/* stop button */}
      <button
        onClick={() => {
          synthPart.stop();
          Tone.Transport.stop();
        }}
      >
        stop
      </button>
    </div>
  );
}
