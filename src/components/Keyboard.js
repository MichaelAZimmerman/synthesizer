import React, { useContext } from "react";
import { SynthContext } from "../context";
import playNote from "../shared/playNote";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default function Keyboard() {
  const synthesizer = useContext(SynthContext);

  return (
    <div className="keyboard">
      <div className="control-container">
        {/* This DropdownButton 
               selects a note-length */}
        <div className="drop-down">
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
        </div>
        {/* This DropdownButton 
               selects a wave-form */}
        <div className="drop-down">
          <DropdownButton
            id="dropdown-basic-button"
            title={`Waveform: ${synthesizer.oscType}`}
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
            <Dropdown.Item
              onSelect={() => synthesizer.setOscType("fattriangle")}
            >
              Fat Triangle
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOscType("fatsquare")}>
              Fat Square
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOscType("fatsine")}>
              Fat Sine
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => synthesizer.setOscType("fatsawtooth")}
            >
              Fat Sawtooth
            </Dropdown.Item>
          </DropdownButton>
        </div>
        {/* This DropdownButton 
               selects an octave */}
        <div className="drop-down">
          <DropdownButton
            id="dropdown-basic-button"
            title={`Octave: ${synthesizer.octave}`}
            variant="secondary"
            size="sm"
          >
            <Dropdown.Item onSelect={() => synthesizer.setOctave(1)}>
              1 - Lowest Pitch
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctave(2)}>
              2
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctave(3)}>
              3
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctave(4)}>
              4
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctave(5)}>
              5
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctave(6)}>
              6
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctave(7)}>
              7
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctave(8)}>
              8 - Highest Pitch
            </Dropdown.Item>
          </DropdownButton>
        </div>
        {/* This Slider 
               selects a distortion amount */}
        <div className="drop-down">
          <Typography id="discrete-slider-small-steps">Distortion</Typography>
          <div className="slider-sm">
            <Slider
              value={synthesizer.distAmt}
              onChange={(e, newValue) => synthesizer.setDistAmt(newValue)}
              aria-labelledby="discrete-slider-small-steps"
              step={0.1}
              marks
              min={0}
              max={1}
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        {/* This Slider 
               selects a distortion amount */}
        <div className="drop-down">
          <Typography id="discrete-slider-small-steps">Tremelo Rate</Typography>
          <div className="slider-sm">
            <Slider
              value={synthesizer.tremAmt}
              onChange={(e, newValue) => synthesizer.setTremAmt(newValue)}
              aria-labelledby="discrete-slider-small-steps"
              step={null}
              marks={[
                {
                  value: 0,
                  label: "",
                },
                {
                  value: 1,
                  label: "",
                },
                {
                  value: 4,
                  label: "",
                },
                {
                  value: 8,
                  label: "",
                },
                {
                  value: 16,
                  label: "",
                },
                {
                  value: 32,
                  label: "",
                },
              ]}
              max="32"
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        {/* This DropdownButton 
               sets ping pong rate */}
        <div className="drop-down">
          <DropdownButton
            id="dropdown-basic-button"
            title={`Delay Rate: ${synthesizer.pingPongRate}`}
            variant="secondary"
            size="sm"
          >
            <Dropdown.Item onSelect={() => synthesizer.setPingPongRate(0)}>
              Ping-Pong Delay Off
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setPingPongRate("1n")}>
              Whole Note
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setPingPongRate("4n")}>
              Quarter Note
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setPingPongRate("8n")}>
              8th Note
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setPingPongRate("16n")}>
              16th Note
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setPingPongRate("32n")}>
              32nd Note
            </Dropdown.Item>
          </DropdownButton>
          <div className="slider-sm">
            <Typography id="discrete-slider-small-steps">
              Delay Depth
            </Typography>
            <Slider
              value={synthesizer.pingPongDepth}
              onChange={(e, newValue) => synthesizer.setPingPongDepth(newValue)}
              aria-labelledby="discrete-slider-small-steps"
              step={0.1}
              marks
              min={0.1}
              max={0.9}
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        <div className="drop-down">
          <Typography id="discrete-slider-small-steps">
            ADSR Envelope:
          </Typography>
          <div className="slider-short">
            <Slider
              orientation="vertical"
              value={synthesizer.attack}
              onChange={(e, newValue) => synthesizer.setAttack(newValue)}
              aria-labelledby="discrete-slider-small-steps"
              step={0.1}
              marks
              min={0.1}
              max={1}
              valueLabelDisplay="auto"
            />
            <Slider
              orientation="vertical"
              value={synthesizer.decay}
              onChange={(e, newValue) => synthesizer.setDecay(newValue)}
              aria-labelledby="discrete-slider-small-steps"
              step={0.1}
              marks
              min={0.1}
              max={1}
              valueLabelDisplay="auto"
            />
            <Slider
              orientation="vertical"
              value={synthesizer.sustain}
              onChange={(e, newValue) => synthesizer.setSustain(newValue)}
              aria-labelledby="discrete-slider-small-steps"
              step={0.1}
              marks
              min={0.1}
              max={1}
              valueLabelDisplay="auto"
            />
            <Slider
              orientation="vertical"
              value={synthesizer.release}
              onChange={(e, newValue) => synthesizer.setRelease(newValue)}
              aria-labelledby="discrete-slider-small-steps"
              step={0.1}
              marks
              min={0.1}
              max={1}
              valueLabelDisplay="auto"
            />
          </div>
        </div>
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
