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
        {/* This DropdownButton 
               selects a note-length */}
        <DropdownButton
          id="dropdown-basic-button"
          title={`Note Type/Length: ${synthesizer.noteType}`}
          variant="secondary"
          size="sm"
        >
          <Dropdown.Item onSelect={() => synthesizer.setNoteType("1n")}>
            Whole Note
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setNoteType("4n")}>
            Quarter Note
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setNoteType("8n")}>
            8th Note
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setNoteType("16n")}>
            16th Note
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setNoteType("32n")}>
            32nd Note
          </Dropdown.Item>
        </DropdownButton>
        {/* This DropdownButton 
               selects a wave-form */}
        <DropdownButton
          id="dropdown-basic-button"
          title={`Waveform Selector`}
          variant="secondary"
          size="sm"
        >
          <Dropdown.Item onSelect={() => synthesizer.setOscType("triangle")}>
            Triangle
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setOscType("square")}>
            Square
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setOscType("sine")}>
            Sine
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setOscType("sawtooth")}>
            Sawtooth
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setOscType("fattriangle")}>
            Fat Triangle
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setOscType("fatsquare")}>
            Fat Square
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setOscType("fatsine")}>
            Fat Sine
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => synthesizer.setOscType("fatsawtooth")}>
            Fat Sawtooth
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
