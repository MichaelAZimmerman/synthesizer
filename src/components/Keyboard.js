import React, { useContext } from "react";
import { SynthContext } from "../context";
import playNote from "../shared/playNote";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import * as Tone from "tone";

export default function Keyboard() {
  const synthesizer = useContext(SynthContext);
  const pingPong = new Tone.PingPongDelay(
    synthesizer.pingPongRate,
    synthesizer.pingPongDepth
  ).toDestination();
  const tremolo = new Tone.Tremolo(synthesizer.tremAmt, 1).toDestination();

  const dist = new Tone.Distortion(synthesizer.distAmt).toDestination();
  const env = new Tone.Envelope({
    attack: 0.5,
    decay: 0.5,
    sustain: 0.5,
    release: 0.8,
  }).toDestination();
  const comp = new Tone.Compressor(-30, 3);
  const synth = new Tone.Synth().chain(dist, tremolo, pingPong, comp);
  synth.oscillator.type = synthesizer.oscType;

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
              max={32}
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
      </div>
      <div className="note-container">
        <div className="note-halfspace"></div>
        <button
          className="note-blk"
          onClick={() => playNote("C#", synthesizer, synth, env, tremolo)}
        >
          C#
        </button>
        <button
          className="note-blk"
          onClick={() => playNote("D#", synthesizer, synth, env, tremolo)}
        >
          D#
        </button>
        <div className="note-space"></div>
        <button
          className="note-blk"
          onClick={() => playNote("F#", synthesizer, synth, env, tremolo)}
        >
          F#
        </button>
        <button
          className="note-blk"
          onClick={() => playNote("G#", synthesizer, synth, env, tremolo)}
        >
          G#
        </button>
        <button
          className="note-blk"
          onClick={() => playNote("A#", synthesizer, synth, env, tremolo)}
        >
          A#
        </button>
        <div className="note-halfspace"></div>
      </div>
      <div className="note-container">
        <button
          className="note"
          onClick={() => playNote("C", synthesizer, synth, env, tremolo)}
        >
          C
        </button>
        <button
          className="note"
          onClick={() => playNote("D", synthesizer, synth, env, tremolo)}
        >
          D
        </button>
        <button
          className="note"
          onClick={() => playNote("E", synthesizer, synth, env, tremolo)}
        >
          E
        </button>
        <button
          className="note"
          onClick={() => playNote("F", synthesizer, synth, env, tremolo)}
        >
          F
        </button>
        <button
          className="note"
          onClick={() => playNote("G", synthesizer, synth, env, tremolo)}
        >
          G
        </button>
        <button
          className="note"
          onClick={() => playNote("A", synthesizer, synth, env, tremolo)}
        >
          A
        </button>
        <button
          className="note"
          onClick={() => playNote("B", synthesizer, synth, env, tremolo)}
        >
          B
        </button>
      </div>
    </div>
  );
}
