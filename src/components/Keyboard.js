import React, { useContext, useState, useEffect, useRef } from "react";
import { SynthContext } from "../context";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Slider from "@material-ui/core/Slider";
import * as Tone from "tone";
import useKeyDown from "../hooks/useKeyDown";
import useKeyUp from "../hooks/useKeyUp";

export default function Keyboard() {
  const synthesizer = useContext(SynthContext);
  const pingPong = new Tone.PingPongDelay(
    synthesizer.pingPongRate,
    synthesizer.pingPongDepth
  ).toDestination();
  const tremolo = new Tone.Tremolo(synthesizer.tremAmt, 1).toDestination();

  const dist = new Tone.Distortion(synthesizer.distAmt).toDestination();
  const comp = new Tone.Compressor(-30, 3);
  const synthRef = useRef(null);

  synthRef.current = new Tone.PolySynth({
    envelope: {
      attack: 0.1,
      decay: 0.2,
      sustain: 0.2,
      release: 0.1,
    },
  }).chain(dist, tremolo, pingPong, comp);

  synthRef.current.options.oscillator.type = synthesizer.oscType;
  const [distOn, setDistOn] = useState(false);
  const [tremOn, setTremOn] = useState(false);
  const [delayOn, setDelayOn] = useState(false);
  useEffect(() => {
    if (!synthesizer.distAmt == 0) {
      setDistOn(true);
    } else {
      setDistOn(false);
    }
  }, [synthesizer.distAmt, distOn, setDistOn]);
  useEffect(() => {
    if (!synthesizer.tremAmt == 0) {
      setTremOn(true);
    } else {
      setTremOn(false);
    }
  }, [synthesizer.tremAmt, tremOn, setTremOn]);
  useEffect(() => {
    if (!synthesizer.pingPongRate == 0) {
      setDelayOn(true);
    } else {
      setDelayOn(false);
    }
  }, [synthesizer.pingPongRate, delayOn, setDelayOn]);

  useKeyDown("z", () => {
    playNote("C", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("z", () => {
    stopNote(synthRef.current, tremolo, "C", synthesizer);
  });
  useKeyDown("s", () => {
    playNote("C#", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("s", () => {
    stopNote(synthRef.current, tremolo, "C#", synthesizer);
  });
  useKeyDown("x", () => {
    playNote("D", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("x", () => {
    stopNote(synthRef.current, tremolo, "D", synthesizer);
  });
  useKeyDown("d", () => {
    playNote("D#", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("d", () => {
    stopNote(synthRef.current, tremolo, "D#", synthesizer);
  });
  useKeyDown("c", () => {
    playNote("E", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("c", () => {
    stopNote(synthRef.current, tremolo, "E", synthesizer);
  });
  useKeyDown("v", () => {
    playNote("F", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("v", () => {
    stopNote(synthRef.current, tremolo, "F", synthesizer);
  });
  useKeyDown("g", () => {
    playNote("F#", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("g", () => {
    stopNote(synthRef.current, tremolo, "F#", synthesizer);
  });
  useKeyDown("b", () => {
    playNote("G", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("b", () => {
    stopNote(synthRef.current, tremolo, "G", synthesizer);
  });
  useKeyDown("h", () => {
    playNote("G#", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("h", () => {
    stopNote(synthRef.current, tremolo, "G#", synthesizer);
  });
  useKeyDown("n", () => {
    playNote("A", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("n", () => {
    stopNote(synthRef.current, tremolo, "A", synthesizer);
  });
  useKeyDown("j", () => {
    playNote("A#", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("j", () => {
    stopNote(synthRef.current, tremolo, "A#", synthesizer);
  });
  useKeyDown("m", () => {
    playNote("B", synthesizer, synthRef.current, tremolo);
  });
  useKeyUp("m", () => {
    stopNote(synthRef.current, tremolo, "B", synthesizer);
  });
  return (
    <div className="keyboard">
      <div className="control-container">
        {/* This DropdownButton 
               selects a note-length */}
        <div className="drop-down">
          {/* <DropdownButton
            id="dropdown-basic-button"
            title={`Note Type/Length: ${synthesizer.noteType}`}
            variant="dark"
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
          </DropdownButton> */}
          <DropdownButton
            id="dropdown-basic-button"
            title={`Octave: ${synthesizer.octave}`}
            variant="dark"
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
        {/* This DropdownButton 
               selects a wave-form */}
        <div className="drop-down">
          <DropdownButton
            id="dropdown-basic-button"
            title={`Waveform: ${synthesizer.oscType}`}
            variant="dark"
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
          {synthesizer.oscType === "sine" && (
            <img className="wave" src="sine.png" />
          )}
          {synthesizer.oscType === "triangle" && (
            <img className="wave" src="triangle.png" />
          )}
          {synthesizer.oscType === "square" && (
            <img className="wave" src="square.png" />
          )}
          {synthesizer.oscType === "sawtooth" && (
            <img className="wave" src="sawtooth.png" />
          )}
        </div>
        {/* This Slider 
               selects a distortion amount */}
        <div className="drop-down">
          {!distOn ? (
            <div className="effect-off" />
          ) : (
            <div className="effect-on" />
          )}
          <div className="slider-title-large">Distortion</div>
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
          {!tremOn ? (
            <div className="effect-off" />
          ) : (
            <div className="effect-on" />
          )}
          <div className="slider-title-large">Tremelo Rate</div>
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
          {!delayOn ? (
            <div className="effect-off" />
          ) : (
            <div className="effect-on" />
          )}
          <DropdownButton
            id="dropdown-basic-button"
            title={`Delay Rate: ${synthesizer.pingPongRate}`}
            variant="dark"
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
            <div className="slider-title-large">Delay Depth</div>
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
      <div className="note-container-blk">
        <div className="note-halfspace"></div>
        <button
          className="note-blk"
          onMouseDown={() =>
            playNote("C#", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "C#", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "C#", synthesizer)
          }
        >
          C#
        </button>
        <button
          className="note-blk"
          onMouseDown={() =>
            playNote("D#", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "D#", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "D#", synthesizer)
          }
        >
          D#
        </button>
        <div className="note-space"></div>
        <button
          className="note-blk"
          onMouseDown={() =>
            playNote("F#", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "F#", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "F#", synthesizer)
          }
        >
          F#
        </button>
        <button
          className="note-blk"
          onMouseDown={() =>
            playNote("G#", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "G#", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "G#", synthesizer)
          }
        >
          G#
        </button>
        <button
          className="note-blk"
          onMouseDown={() =>
            playNote("A#", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "A#", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "A#", synthesizer)
          }
        >
          A#
        </button>
        <div className="note-halfspace"></div>
      </div>
      <div className="note-container-wht">
        <button
          className="note"
          onMouseDown={() =>
            playNote("C", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "C", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "C", synthesizer)
          }
        >
          C
        </button>
        <button
          className="note"
          onMouseDown={() =>
            playNote("D", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "D", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "D", synthesizer)
          }
        >
          D
        </button>
        <button
          className="note"
          onMouseDown={() =>
            playNote("E", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "E", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "E", synthesizer)
          }
        >
          E
        </button>
        <button
          className="note"
          onMouseDown={() =>
            playNote("F", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "F", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "F", synthesizer)
          }
        >
          F
        </button>
        <button
          className="note"
          onMouseDown={() =>
            playNote("G", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "G", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "G", synthesizer)
          }
        >
          G
        </button>
        <button
          className="note"
          onMouseDown={() =>
            playNote("A", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "A", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "A", synthesizer)
          }
        >
          A
        </button>
        <button
          className="note"
          onMouseDown={() =>
            playNote("B", synthesizer, synthRef.current, tremolo)
          }
          onMouseUp={() =>
            stopNote(synthRef.current, tremolo, "B", synthesizer)
          }
          onMouseOut={() =>
            stopNote(synthRef.current, tremolo, "B", synthesizer)
          }
        >
          B
        </button>
      </div>
    </div>
  );
  function playNote(note, synthesizer, synth, tremolo) {
    tremolo.start();
    synth.triggerAttack(`${note}${synthesizer.octave}`, synthesizer.noteType);
  }
  function stopNote(synth, tremolo, note, synthesizer) {
    synth.triggerRelease(`${note}${synthesizer.octave}`, "+0.1");

    // synth.onsilence(() => {
    //   tremolo.stop();
    // });
  }
}
