import React from "react";
import * as Tone from "tone";

export default function Keyboard() {
  const synth = new Tone.Synth().toDestination();

  function playNote(note) {
    synth.triggerAttackRelease(`${note}4`, "8n");
  }
  return (
    <div>
      <div className="note-wrapper">
        <div className="note-halfspace"></div>
        <button className="note-blk" onClick={() => playNote("C#")}>
          C#
        </button>
        <button className="note-blk" onClick={() => playNote("D#")}>
          D#
        </button>
        <div className="note-space"></div>
        <button className="note-blk" onClick={() => playNote("F#")}>
          F#
        </button>
        <button className="note-blk" onClick={() => playNote("G#")}>
          G#
        </button>
        <button className="note-blk" onClick={() => playNote("A#")}>
          A#
        </button>
        <div className="note-halfspace"></div>
      </div>
      <div className="note-wrapper">
        <button className="note" onClick={() => playNote("C")}>
          C
        </button>
        <button className="note" onClick={() => playNote("D")}>
          D
        </button>
        <button className="note" onClick={() => playNote("E")}>
          E
        </button>
        <button className="note" onClick={() => playNote("F")}>
          F
        </button>
        <button className="note" onClick={() => playNote("G")}>
          G
        </button>
        <button className="note" onClick={() => playNote("A")}>
          A
        </button>
        <button className="note" onClick={() => playNote("B")}>
          B
        </button>
      </div>
    </div>
  );
}
