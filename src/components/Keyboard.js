import React, { useContext } from "react";
import { SynthContext } from "../context";
import playNote from "../shared/playNote";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Keyboard() {
  const synthesizer = useContext(SynthContext);
  return (
    <div className="keyboard">
      <div className="control-container">
        <DropdownButton id="dropdown-basic-button" title="Select Waveform">
          <Dropdown.Item onChange={synthesizer.setNoteType("4n")}>
            Quarter Note
          </Dropdown.Item>
          <Dropdown.Item onChange={synthesizer.setNoteType("8n")}>
            Eighth Note
          </Dropdown.Item>
          <Dropdown.Item onChange={synthesizer.setNoteType("16n")}>
            Sixteeth Note
          </Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="note-container">
        <div className="note-halfspace"></div>
        <button
          className="note-blk"
          onClick={() => playNote("C#", synthesizer)}
        >
          C#
        </button>
        <button
          className="note-blk"
          onClick={() => playNote("D#", synthesizer)}
        >
          D#
        </button>
        <div className="note-space"></div>
        <button
          className="note-blk"
          onClick={() => playNote("F#", synthesizer)}
        >
          F#
        </button>
        <button
          className="note-blk"
          onClick={() => playNote("G#", synthesizer)}
        >
          G#
        </button>
        <button
          className="note-blk"
          onClick={() => playNote("A#", synthesizer)}
        >
          A#
        </button>
        <div className="note-halfspace"></div>
      </div>
      <div className="note-container">
        <button className="note" onClick={() => playNote("C", synthesizer)}>
          C
        </button>
        <button className="note" onClick={() => playNote("D", synthesizer)}>
          D
        </button>
        <button className="note" onClick={() => playNote("E", synthesizer)}>
          E
        </button>
        <button className="note" onClick={() => playNote("F", synthesizer)}>
          F
        </button>
        <button className="note" onClick={() => playNote("G", synthesizer)}>
          G
        </button>
        <button className="note" onClick={() => playNote("A", synthesizer)}>
          A
        </button>
        <button className="note" onClick={() => playNote("B", synthesizer)}>
          B
        </button>
      </div>
    </div>
  );
}
