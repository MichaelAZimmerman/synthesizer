import React, { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import Drum from "./Sequences/Drum";
import { NoiseSynth, Distortion, ToneEvent } from "tone";

// useEffect(() => {
//   synthPart.stop();
//   return () => {
//     cleanup;
//   };
// }, [notes, hihatNotes, snareNotes]);

export default function Sequencer() {
  const transport = Tone.Transport;
  const [play, setPlay] = useState(false);
  const synth = new Tone.MembraneSynth().toDestination();
  const dist = new Distortion(1).toDestination();
  //   const lowPass = new Filter({
  //     frequency: 11000,
  //   }).connect(dist);
  const hihatSynth = new NoiseSynth({
    volume: -12,
    noise: {
      type: "white",
      playbackRate: 6,
    },
    envelope: {
      attack: 0.001,
      decay: 0.13,
      sustain: 0,
      release: 0.03,
    },
  }).toDestination();
  const snareSynth = new Tone.MembraneSynth({
    volume: 0,
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
    volume: 10,
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
  const [hihatNotes, setHihatNotes] = useState([
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
  const hihatPart = new Tone.Sequence(
    function (time, note) {
      hihatSynth.triggerAttackRelease("10hz", time);
    },
    hihatNotes,
    "16n"
  );
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
      <Drum notes={notes} setNotes={setNotes} />
      {/* <br /> */}
      <div>Snare</div>
      <Drum notes={snareNotes} setNotes={setSnareNotes} />
      <div>Hi-Hat</div>
      <Drum notes={hihatNotes} setNotes={setHihatNotes} />
      {/* <br /> */}
      {/* start button */}
      {!play ? (
        <button
          className="start"
          onClick={() => {
            hihatPart.start();
            synthPart.start();
            snarePart.start();
            transport.toggle();
            setPlay(true);
          }}
        >
          START
        </button>
      ) : (
        <button
          className="stop"
          onClick={() => {
            hihatPart.stop();
            synthPart.stop();
            snarePart.stop();
            transport.stop();
            transport.cancel();

            setPlay(false);
          }}
        >
          STOP
        </button>
      )}
    </div>
  );
}
