import React from "react";

function KeySelector({ activeNote, setActiveNote, synth }) {
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
            synth.triggerAttackRelease("C#2", "16n");
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
            synth.triggerAttackRelease("D#2", "16n");
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
            synth.triggerAttackRelease("F#2", "16n");
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
            synth.triggerAttackRelease("G#2", "16n");
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
            synth.triggerAttackRelease("A#2", "16n");
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
            synth.triggerAttackRelease("C2", "16n");
          }}
        >
          C
        </button>
        <button
          className={activeNote === "D2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("D2");
            synth.triggerAttackRelease("D2", "16n");
          }}
        >
          D
        </button>
        <button
          className={activeNote === "E2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("E2");
            synth.triggerAttackRelease("E2", "16n");
          }}
        >
          E
        </button>
        <button
          className={activeNote === "F2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("F2");
            synth.triggerAttackRelease("F2", "16n");
          }}
        >
          F
        </button>
        <button
          className={activeNote === "G2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("G2");
            synth.triggerAttackRelease("G2", "16n");
          }}
        >
          G
        </button>
        <button
          className={activeNote === "A2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("A2");
            synth.triggerAttackRelease("A2", "16n");
          }}
        >
          A
        </button>
        <button
          className={activeNote === "B2" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("B2");
            synth.triggerAttackRelease("B2", "16n");
          }}
        >
          B
        </button>
      </div>
    </div>
  );
}

export default KeySelector;
