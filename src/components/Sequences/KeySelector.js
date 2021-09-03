import React from "react";

function KeySelector({ activeNote, setActiveNote, synth }) {
  return (
    <div>
      <div className="seq-note-container">
        <div className="seq-note-halfspace"></div>
        <button
          className={
            activeNote === "C#3" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("C#3");
            synth.triggerAttackRelease("C#3", "16n");
          }}
        >
          C#
        </button>
        <button
          className={
            activeNote === "D#3" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("D#3");
            synth.triggerAttackRelease("D#3", "16n");
          }}
        >
          D#
        </button>
        <div className="seq-note-space"></div>
        <button
          className={
            activeNote === "F#3" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("F#3");
            synth.triggerAttackRelease("F#3", "16n");
          }}
        >
          F#
        </button>
        <button
          className={
            activeNote === "G#3" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("G#3");
            synth.triggerAttackRelease("G#3", "16n");
          }}
        >
          G#
        </button>
        <button
          className={
            activeNote === "A#3" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => {
            setActiveNote("A#3");
            synth.triggerAttackRelease("A#3", "16n");
          }}
        >
          A#
        </button>
        <div className="seq-note-halfspace"></div>
      </div>
      <div className="seq-note-container">
        <button
          className={activeNote === "C3" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("C3");
            synth.triggerAttackRelease("C3", "16n");
          }}
        >
          C
        </button>
        <button
          className={activeNote === "D3" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("D3");
            synth.triggerAttackRelease("D3", "16n");
          }}
        >
          D
        </button>
        <button
          className={activeNote === "E3" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("E3");
            synth.triggerAttackRelease("E3", "16n");
          }}
        >
          E
        </button>
        <button
          className={activeNote === "F3" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("F3");
            synth.triggerAttackRelease("F3", "16n");
          }}
        >
          F
        </button>
        <button
          className={activeNote === "G3" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("G3");
            synth.triggerAttackRelease("G3", "16n");
          }}
        >
          G
        </button>
        <button
          className={activeNote === "A3" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("A3");
            synth.triggerAttackRelease("A3", "16n");
          }}
        >
          A
        </button>
        <button
          className={activeNote === "B3" ? "seq-note-active" : "seq-note"}
          onClick={() => {
            setActiveNote("B3");
            synth.triggerAttackRelease("B3", "16n");
          }}
        >
          B
        </button>
      </div>
    </div>
  );
}

export default KeySelector;
