import React from "react";

function KeySelectorLead({ activeNote, setActiveNote, synth }) {
  return (
    <div>
      <div className="seq-note-container">
        <div className="seq-note-halfspace"></div>
        <button
          className={
            activeNote === "C#4" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("C#4");
            synth.triggerAttackRelease("C#4", "16n");
          }}
        >
          C#
        </button>
        <button
          className={
            activeNote === "D#4" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("D#4");
            synth.triggerAttackRelease("D#4", "16n");
          }}
        >
          D#
        </button>
        <div className="seq-note-space"></div>
        <button
          className={
            activeNote === "F#4" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("F#4");
            synth.triggerAttackRelease("F#4", "16n");
          }}
        >
          F#
        </button>
        <button
          className={
            activeNote === "G#4" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("G#4");
            synth.triggerAttackRelease("G#4", "16n");
          }}
        >
          G#
        </button>
        <button
          className={
            activeNote === "A#4" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("A#4");
            synth.triggerAttackRelease("A#4", "16n");
          }}
        >
          A#
        </button>
        <div className="seq-note-halfspace"></div>
      </div>
      <div className="seq-note-container">
        <button
          className={activeNote === "C4" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("C4");
            synth.triggerAttackRelease("C4", "16n");
          }}
        >
          C
        </button>
        <button
          className={activeNote === "D4" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("D4");
            synth.triggerAttackRelease("D4", "16n");
          }}
        >
          D
        </button>
        <button
          className={activeNote === "E4" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("E4");
            synth.triggerAttackRelease("E4", "16n");
          }}
        >
          E
        </button>
        <button
          className={activeNote === "F4" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("F4");
            synth.triggerAttackRelease("F4", "16n");
          }}
        >
          F
        </button>
        <button
          className={activeNote === "G4" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("G4");
            synth.triggerAttackRelease("G4", "16n");
          }}
        >
          G
        </button>
        <button
          className={activeNote === "A4" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("A4");
            synth.triggerAttackRelease("A4", "16n");
          }}
        >
          A
        </button>
        <button
          className={activeNote === "B4" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("B4");
            synth.triggerAttackRelease("B4", "16n");
          }}
        >
          B
        </button>
      </div>
    </div>
  );
}

export default KeySelectorLead;
