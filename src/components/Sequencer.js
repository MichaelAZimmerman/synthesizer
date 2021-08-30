import React, { useEffect, useContext, useState } from "react";
import * as Tone from "tone";
import { SequencerContext } from "../context";
import Drum from "./Sequences/Drum";
import {
  Filter,
  Frequency,
  NoiseSynth,
  Synth,
  PolySynth,
  FrequencyEnvelope,
  Distortion,
} from "tone";

export default function Sequencer() {
  const { createSequence, sequence, setSequence } =
    useContext(SequencerContext);
  //   create a synth
  const synth = new Tone.MembraneSynth().toDestination();
  const dist = new Distortion(1).toDestination();
  //   const lowPass = new Filter({
  //     frequency: 1000,
  //   }).connect(dist);
  const snareSynth = new Tone.MembraneSynth({
    detune: 2400,
    envelope: {
      attack: 0.001,
      decay: 0.1,
      sustain: 0.01,
      release: 0.13,
    },
  }).connect(dist);
  const noiseTwo = new NoiseSynth({
    volume: 6,
    noise: {
      type: "white",
      playbackRate: 12,
    },
    envelope: {
      attack: 0.001,
      decay: 0.03,
      sustain: 0,
      release: 0.03,
    },
  }).connect(dist);
  const noise = new NoiseSynth({
    volume: 6,
    noise: {
      type: "pink",
      playbackRate: 6,
    },
    envelope: {
      attack: 0.001,
      decay: 0.13,
      sustain: 0,
      release: 0.03,
    },
  }).connect(dist);
  const [snareNotes, setSnareNotes] = useState([
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
  const snarePart = new Tone.Sequence(
    function (time, note) {
      noise.triggerAttackRelease("10hz", time);
      noiseTwo.triggerAttackRelease("10hz", time);
      snareSynth.triggerAttackRelease(note, "10hz", time);
    },
    snareNotes,
    "16n"
  );
  const synthPart = new Tone.Sequence(
    function (time, note) {
      synth.triggerAttackRelease(note, "10hz", time);
    },
    notes,
    "16n"
  );
  return (
    <div>
      <div>Bass Drum</div>
      <Drum notes={notes} setNotes={setNotes} synth={synth} />
      {/* <br /> */}
      <div>Snare</div>
      <Drum notes={snareNotes} setNotes={setSnareNotes} synth={snareSynth} />
      {/* <br /> */}
      {/* start button */}
      <button
        onClick={() => {
          synthPart.start();
          snarePart.start();
          Tone.Transport.start();
        }}
      >
        start
      </button>
      {/* stop button */}
      <button
        onClick={() => {
          synthPart.stop();
          snarePart.stop();
          Tone.Transport.stop();
        }}
      >
        stop
      </button>
    </div>
  );
}
