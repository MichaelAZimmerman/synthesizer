import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { SynthContext } from "../context";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Slider from "@material-ui/core/Slider";
import * as Tone from "tone";
import useKeyDown from "../hooks/useKeyDown";
import useKeyUp from "../hooks/useKeyUp";
import { Modal, Button } from "react-bootstrap";

export default function Keyboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const synthesizer = useContext(SynthContext);
  const limiter = new Tone.Limiter(-2).toDestination();
  const vol = new Tone.Volume(synthesizer.volume).connect(limiter);
  const comp = new Tone.Compressor(-30, 3).connect(vol);
  const tremolo = new Tone.Tremolo(synthesizer.tremAmt, 1)
    .connect(comp)
    .start();
  const pingPong = new Tone.PingPongDelay(
    synthesizer.pingPongRate,
    synthesizer.pingPongDepth
  ).connect(tremolo);

  const dist = new Tone.Distortion(synthesizer.distAmt).connect(pingPong);

  const synthRef = new Tone.PolySynth({
    maxPolyphony: 12,
    envelope: {
      attack: 0.1,
      decay: 0.2,
      sustain: 0.2,
      release: 0.1,
    },
  }).chain(dist, tremolo);
  console.log(synthRef);
  // synthRef.current = new Tone.PolySynth({
  //   envelope: {
  //     attack: 0.1,
  //     decay: 0.2,
  //     sustain: 0.2,
  //     release: 0.1,
  //   },
  // }).chain(dist, tremolo, pingPong, comp);

  synthRef.options.oscillator.type = synthesizer.oscType;
  const [distOn, setDistOn] = useState(false);
  const [tremOn, setTremOn] = useState(false);
  const [delayOn, setDelayOn] = useState(false);

  const playNote = useCallback(
    (note, synthesizer, synth, tremolo) => {
      // tremolo.start();
      synth.triggerAttack(`${note}${synthesizer.octave}`, synthesizer.noteType);
    },
    [synthesizer, tremolo, synthRef]
  );
  const stopNote = useCallback(
    (synth, tremolo, note, synthesizer) => {
      synth.triggerRelease(`${note}${synthesizer.octave}`, "+0.1");
      // tremolo.stop();

      // synth.onsilence(() => {
      //   tremolo.stop();
      // });
    },
    [synthesizer, tremolo, synthRef]
  );

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
    playNote("C", synthesizer, synthRef, tremolo);
  });
  useKeyUp("z", () => {
    stopNote(synthRef, tremolo, "C", synthesizer);
  });
  useKeyDown("s", () => {
    playNote("C#", synthesizer, synthRef, tremolo);
  });
  useKeyUp("s", () => {
    stopNote(synthRef, tremolo, "C#", synthesizer);
  });
  useKeyDown("x", () => {
    playNote("D", synthesizer, synthRef, tremolo);
  });
  useKeyUp("x", () => {
    stopNote(synthRef, tremolo, "D", synthesizer);
  });
  useKeyDown("d", () => {
    playNote("D#", synthesizer, synthRef, tremolo);
  });
  useKeyUp("d", () => {
    stopNote(synthRef, tremolo, "D#", synthesizer);
  });
  useKeyDown("c", () => {
    playNote("E", synthesizer, synthRef, tremolo);
  });
  useKeyUp("c", () => {
    stopNote(synthRef, tremolo, "E", synthesizer);
  });
  useKeyDown("v", () => {
    playNote("F", synthesizer, synthRef, tremolo);
  });
  useKeyUp("v", () => {
    stopNote(synthRef, tremolo, "F", synthesizer);
  });
  useKeyDown("g", () => {
    playNote("F#", synthesizer, synthRef, tremolo);
  });
  useKeyUp("g", () => {
    stopNote(synthRef, tremolo, "F#", synthesizer);
  });
  useKeyDown("b", () => {
    playNote("G", synthesizer, synthRef, tremolo);
  });
  useKeyUp("b", () => {
    stopNote(synthRef, tremolo, "G", synthesizer);
  });
  useKeyDown("h", () => {
    playNote("G#", synthesizer, synthRef, tremolo);
  });
  useKeyUp("h", () => {
    stopNote(synthRef, tremolo, "G#", synthesizer);
  });
  useKeyDown("n", () => {
    playNote("A", synthesizer, synthRef, tremolo);
  });
  useKeyUp("n", () => {
    stopNote(synthRef, tremolo, "A", synthesizer);
  });
  useKeyDown("j", () => {
    playNote("A#", synthesizer, synthRef, tremolo);
  });
  useKeyUp("j", () => {
    stopNote(synthRef, tremolo, "A#", synthesizer);
  });
  useKeyDown("m", () => {
    playNote("B", synthesizer, synthRef, tremolo);
  });
  useKeyUp("m", () => {
    stopNote(synthRef, tremolo, "B", synthesizer);
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
          <div className="slider-sm">
            <div className="slider-title-large">Volume</div>
            <Slider
              value={synthesizer.volume}
              onChange={(e, newValue) => synthesizer.setVolume(newValue)}
              aria-labelledby="discrete-slider-small-steps"
              step={2}
              marks
              min={-12}
              max={12}
              valueLabelDisplay="auto"
            />
          </div>
          <button onClick={() => handleShow()}>HELP</button>
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
          <div className="slider-title-large">Tremolo Rate</div>
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
          onMouseDown={() => playNote("C#", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "C#", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "C#", synthesizer)}
        >
          C#
        </button>
        <button
          className="note-blk"
          onMouseDown={() => playNote("D#", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "D#", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "D#", synthesizer)}
        >
          D#
        </button>
        <div className="note-space"></div>
        <button
          className="note-blk"
          onMouseDown={() => playNote("F#", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "F#", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "F#", synthesizer)}
        >
          F#
        </button>
        <button
          className="note-blk"
          onMouseDown={() => playNote("G#", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "G#", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "G#", synthesizer)}
        >
          G#
        </button>
        <button
          className="note-blk"
          onMouseDown={() => playNote("A#", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "A#", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "A#", synthesizer)}
        >
          A#
        </button>
        <div className="note-halfspace"></div>
      </div>
      <div className="note-container-wht">
        <button
          className="note"
          onMouseDown={() => playNote("C", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "C", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "C", synthesizer)}
        >
          C
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("D", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "D", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "D", synthesizer)}
        >
          D
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("E", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "E", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "E", synthesizer)}
        >
          E
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("F", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "F", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "F", synthesizer)}
        >
          F
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("G", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "G", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "G", synthesizer)}
        >
          G
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("A", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "A", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "A", synthesizer)}
        >
          A
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("B", synthesizer, synthRef, tremolo)}
          onMouseUp={() => stopNote(synthRef, tremolo, "B", synthesizer)}
          onMouseOut={() => stopNote(synthRef, tremolo, "B", synthesizer)}
        >
          B
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Help</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <img className="help-img" src="keyboardHelp.png" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
