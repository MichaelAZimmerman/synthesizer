import React, { useRef, useEffect } from "react";
import * as Tone from "tone";
function KeySelectorOctUp({ activeNote, setActiveNote }) {
  const synthRef = useRef(null);

  useEffect(() => {
    synthRef.current = new Tone.Synth({
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.2,
        release: 0.13,
      },
      oscillator: { type: "triangle" },
    }).toDestination();
  }, []);
  return (
    <div>
      <div className="seq-note-container">
        <div className="seq-note-halfspace octave-title">Octave 3</div>
        <button
          className={
            activeNote === "C#3"
              ? "seq-note-blk-active-two"
              : "seq-note-blk-two"
          }
          onClick={() => {
            setActiveNote("C#3");
            synthRef.current.triggerAttackRelease("C#3", "16n");
          }}
        >
          C#
        </button>
        <button
          className={
            activeNote === "D#3"
              ? "seq-note-blk-active-two"
              : "seq-note-blk-two"
          }
          onClick={() => {
            setActiveNote("D#3");
            synthRef.current.triggerAttackRelease("D#3", "16n");
          }}
        >
          D#
        </button>
        <div className="seq-note-space"></div>
        <button
          className={
            activeNote === "F#3"
              ? "seq-note-blk-active-two"
              : "seq-note-blk-two"
          }
          onClick={() => {
            setActiveNote("F#3");
            synthRef.current.triggerAttackRelease("F#3", "16n");
          }}
        >
          F#
        </button>
        <button
          className={
            activeNote === "G#3"
              ? "seq-note-blk-active-two"
              : "seq-note-blk-two"
          }
          onClick={() => {
            setActiveNote("G#3");
            synthRef.current.triggerAttackRelease("G#3", "16n");
          }}
        >
          G#
        </button>
        <button
          className={
            activeNote === "A#3"
              ? "seq-note-blk-active-two"
              : "seq-note-blk-two"
          }
          onClick={() => {
            setActiveNote("A#3");
            synthRef.current.triggerAttackRelease("A#3", "16n");
          }}
        >
          A#
        </button>
        <div className="seq-note-halfspace"></div>
      </div>
      <div className="seq-note-container">
        <button
          className={
            activeNote === "C3" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("C3");
            synthRef.current.triggerAttackRelease("C3", "16n");
          }}
        >
          C
        </button>
        <button
          className={
            activeNote === "D3" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("D3");
            synthRef.current.triggerAttackRelease("D3", "16n");
          }}
        >
          D
        </button>
        <button
          className={
            activeNote === "E3" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("E3");
            synthRef.current.triggerAttackRelease("E3", "16n");
          }}
        >
          E
        </button>
        <button
          className={
            activeNote === "F3" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("F3");
            synthRef.current.triggerAttackRelease("F3", "16n");
          }}
        >
          F
        </button>
        <button
          className={
            activeNote === "G3" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("G3");
            synthRef.current.triggerAttackRelease("G3", "16n");
          }}
        >
          G
        </button>
        <button
          className={
            activeNote === "A3" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("A3");
            synthRef.current.triggerAttackRelease("A3", "16n");
          }}
        >
          A
        </button>
        <button
          className={
            activeNote === "B3" ? "seq-note-active-two" : "seq-note-two"
          }
          onClick={() => {
            setActiveNote("B3");
            synthRef.current.triggerAttackRelease("B3", "16n");
          }}
        >
          B
        </button>
      </div>
    </div>
  );
}

export default KeySelectorOctUp;
