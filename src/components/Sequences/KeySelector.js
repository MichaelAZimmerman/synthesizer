import React, { useRef, useEffect } from "react";
import * as Tone from "tone";
function KeySelector({ activeNote, setActiveNote }) {
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
        <div className="seq-note-halfspace"></div>
        <button
          className={
            activeNote === "C#2" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("C#2");
            synthRef.current.triggerAttackRelease("C#2", "16n");
          }}
        >
          C#
        </button>
        <button
          className={
            activeNote === "D#2" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("D#2");
            synthRef.current.triggerAttackRelease("D#2", "16n");
          }}
        >
          D#
        </button>
        <div className="seq-note-space"></div>
        <button
          className={
            activeNote === "F#2" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("F#2");
            synthRef.current.triggerAttackRelease("F#2", "16n");
          }}
        >
          F#
        </button>
        <button
          className={
            activeNote === "G#2" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("G#2");
            synthRef.current.triggerAttackRelease("G#2", "16n");
          }}
        >
          G#
        </button>
        <button
          className={
            activeNote === "A#2" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("A#2");
            synthRef.current.triggerAttackRelease("A#2", "16n");
          }}
        >
          A#
        </button>
        <div className="seq-note-halfspace"></div>
      </div>
      <div className="seq-note-container">
        <button
          className={activeNote === "C2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("C2");
            synthRef.current.triggerAttackRelease("C2", "16n");
          }}
        >
          C
        </button>
        <button
          className={activeNote === "D2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("D2");
            synthRef.current.triggerAttackRelease("D2", "16n");
          }}
        >
          D
        </button>
        <button
          className={activeNote === "E2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("E2");
            synthRef.current.triggerAttackRelease("E2", "16n");
          }}
        >
          E
        </button>
        <button
          className={activeNote === "F2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("F2");
            synthRef.current.triggerAttackRelease("F2", "16n");
          }}
        >
          F
        </button>
        <button
          className={activeNote === "G2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("G2");
            synthRef.current.triggerAttackRelease("G2", "16n");
          }}
        >
          G
        </button>
        <button
          className={activeNote === "A2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("A2");
            synthRef.current.triggerAttackRelease("A2", "16n");
          }}
        >
          A
        </button>
        <button
          className={activeNote === "B2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("B2");
            synthRef.current.triggerAttackRelease("B2", "16n");
          }}
        >
          B
        </button>
      </div>
    </div>
  );
}

export default KeySelector;
