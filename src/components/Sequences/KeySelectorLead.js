import React, { useRef, useEffect } from "react";
import * as Tone from "tone";
function KeySelectorLead({ activeNote, setActiveNote }) {
  const synthRef = useRef(null);

  useEffect(() => {
    synthRef.current = new Tone.Synth({
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.2,
        release: 0.13,
      },
      oscillator: { type: "sawtooth" },
    }).toDestination();
  }, []);
  return (
    <div>
      <div className="seq-note-container">
        <div className="seq-note-halfspace"></div>
        <button
          className={
            activeNote === "C#4"
              ? "seq-note-blk-active-two"
              : "seq-note-blk-two"
          }
          onClick={() => {
            setActiveNote("C#4");
            synthRef.current.triggerAttackRelease("C#4", "16n");
          }}
        >
          C#
        </button>
        <button
          className={
            activeNote === "D#4"
              ? "seq-note-blk-active-two"
              : "seq-note-blk-two"
          }
          onClick={() => {
            setActiveNote("D#4");
            synthRef.current.triggerAttackRelease("D#4", "16n");
          }}
        >
          D#
        </button>
        <div className="seq-note-space"></div>
        <button
          className={
            activeNote === "F#4"
              ? "seq-note-blk-active-two"
              : "seq-note-blk-two"
          }
          onClick={() => {
            setActiveNote("F#4");
            synthRef.current.triggerAttackRelease("F#4", "16n");
          }}
        >
          F#
        </button>
        <button
          className={
            activeNote === "G#4"
              ? "seq-note-blk-active-two"
              : "seq-note-blk-two"
          }
          onClick={() => {
            setActiveNote("G#4");
            synthRef.current.triggerAttackRelease("G#4", "16n");
          }}
        >
          G#
        </button>
        <button
          className={
            activeNote === "A#4"
              ? "seq-note-blk-active-two"
              : "seq-note-blk-two"
          }
          onClick={() => {
            setActiveNote("A#4");
            synthRef.current.triggerAttackRelease("A#4", "16n");
          }}
        >
          A#
        </button>
        <div className="seq-note-halfspace"></div>
      </div>
      <div className="seq-note-container">
        <button
          className={
            activeNote === "C4" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("C4");
            synthRef.current.triggerAttackRelease("C4", "16n");
          }}
        >
          C
        </button>
        <button
          className={
            activeNote === "D4" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("D4");
            synthRef.current.triggerAttackRelease("D4", "16n");
          }}
        >
          D
        </button>
        <button
          className={
            activeNote === "E4" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("E4");
            synthRef.current.triggerAttackRelease("E4", "16n");
          }}
        >
          E
        </button>
        <button
          className={
            activeNote === "F4" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("F4");
            synthRef.current.triggerAttackRelease("F4", "16n");
          }}
        >
          F
        </button>
        <button
          className={
            activeNote === "G4" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("G4");
            synthRef.current.triggerAttackRelease("G4", "16n");
          }}
        >
          G
        </button>
        <button
          className={
            activeNote === "A4" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("A4");
            synthRef.current.triggerAttackRelease("A4", "16n");
          }}
        >
          A
        </button>
        <button
          className={
            activeNote === "B4" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("B4");
            synthRef.current.triggerAttackRelease("B4", "16n");
          }}
        >
          B
        </button>
      </div>
    </div>
  );
}

export default KeySelectorLead;
