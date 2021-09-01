import React from "react";

function KeySequence({ activeNote, setActiveNote }) {
  return (
    <div>
      <div className="seq-note-container">
        <div className="seq-note-halfspace"></div>
        <button
          className={
            activeNote === "C#3" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => setActiveNote("C#3")}
        >
          C#
        </button>
        <button
          className={
            activeNote === "D#3" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => setActiveNote("D#3")}
        >
          D#
        </button>
        <div className="seq-note-space"></div>
        <button
          className={
            activeNote === "F#3" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => setActiveNote("F#3")}
        >
          F#
        </button>
        <button
          className={
            activeNote === "G#3" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => setActiveNote("G#3")}
        >
          G#
        </button>
        <button
          className={
            activeNote === "A#3" ? "seq-note-blk-active" : "seq-note-blk"
          }
          onClick={() => setActiveNote("A#3")}
        >
          A#
        </button>
        <div className="seq-note-halfspace"></div>
      </div>
      <div className="seq-note-container">
        <button
          className={activeNote === "C3" ? "seq-note-active" : "seq-note"}
          onClick={() => setActiveNote("C3")}
        >
          C
        </button>
        <button
          className={activeNote === "D3" ? "seq-note-active" : "seq-note"}
          onClick={() => setActiveNote("D3")}
        >
          D
        </button>
        <button
          className={activeNote === "E3" ? "seq-note-active" : "seq-note"}
          onClick={() => setActiveNote("E3")}
        >
          E
        </button>
        <button
          className={activeNote === "F3" ? "seq-note-active" : "seq-note"}
          onClick={() => setActiveNote("F3")}
        >
          F
        </button>
        <button
          className={activeNote === "G3" ? "seq-note-active" : "seq-note"}
          onClick={() => setActiveNote("G3")}
        >
          G
        </button>
        <button
          className={activeNote === "A3" ? "seq-note-active" : "seq-note"}
          onClick={() => setActiveNote("A3")}
        >
          A
        </button>
        <button
          className={activeNote === "B3" ? "seq-note-active" : "seq-note"}
          onClick={() => setActiveNote("B3")}
        >
          B
        </button>
      </div>
    </div>
  );
}

export default KeySequence;
