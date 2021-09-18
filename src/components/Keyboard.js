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
import { Card, Accordion } from "react-bootstrap";
import Sketch from "react-p5";

export default function Keyboard() {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(350, 40).parent(canvasParentRef);
  };

  const draw = (p5) => {
    const opacity = p5.map(meter.getValue(), -150, 0, 0, 255, true);
    const values = analyser.getValue();
    p5.background(34, 97, 74, 255);
    p5.stroke(74, 212, 109, opacity);
    p5.strokeWeight(100 * 0.0175);
    p5.noFill();
    // p5.fill(74, 212, 109, 125);

    // p5.circle(175, 20, -100 * 0.1 * scale);

    // if (play) {

    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i];
      const x = p5.map(i, 20, values.length - 1, 0, 350);
      const y = 40 / 2 + amplitude * -20;
      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
    // }
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
  };
  const meter = new Tone.Meter();
  const analyser = new Tone.Analyser("waveform", 512);
  Tone.Destination.connect(meter);
  Tone.Destination.connect(analyser);
  const synthesizer = useContext(SynthContext);
  const limiter = new Tone.Limiter(-2).toDestination();
  const vol = new Tone.Volume(synthesizer.volume).connect(limiter);
  const volTwo = new Tone.Volume(synthesizer.volumeTwo).connect(limiter);
  const comp = new Tone.Compressor(-30, 3).connect(limiter);
  const tremolo = new Tone.Tremolo(synthesizer.tremAmt, 1)
    .connect(comp)
    .start();
  const pingPong = new Tone.PingPongDelay(
    synthesizer.pingPongRate,
    synthesizer.pingPongDepth
  ).connect(tremolo);

  const dist = new Tone.Distortion(synthesizer.distAmt).connect(pingPong);

  const synthRef = new Tone.PolySynth({
    maxPolyphony: 24,
    envelope: {
      attack: 0.1,
      decay: 0.2,
      sustain: 0.2,
      release: 0.1,
    },
  }).chain(vol, dist, tremolo);
  const synthTwoRef = new Tone.PolySynth({
    maxPolyphony: 24,
    envelope: {
      attack: 0.1,
      decay: 0.2,
      sustain: 0.2,
      release: 0.1,
    },
  }).chain(volTwo, dist, tremolo);
  // synthRef.current = new Tone.PolySynth({
  //   envelope: {
  //     attack: 0.1,
  //     decay: 0.2,
  //     sustain: 0.2,
  //     release: 0.1,
  //   },
  // }).chain(dist, tremolo, pingPong, comp);
  synthRef.options.oscillator.type = synthesizer.oscType;
  synthTwoRef.options.oscillator.type = synthesizer.oscTypeTwo;
  const [distOn, setDistOn] = useState(false);
  const [tremOn, setTremOn] = useState(false);
  const [delayOn, setDelayOn] = useState(false);

  const playNote = useCallback(
    (note, synthesizer, synth, synthTwo) => {
      // tremolo.start();
      synth.triggerAttack(`${note}${synthesizer.octave}`, synthesizer.noteType);
      synthTwo.triggerAttack(
        `${note}${synthesizer.octaveTwo}`,
        synthesizer.noteType
      );
    },
    [synthesizer, tremolo, synthRef]
  );
  const stopNote = useCallback(
    (synth, synthTwo, note, synthesizer) => {
      synth.triggerRelease(`${note}${synthesizer.octave}`, "+0.1");
      synthTwo.triggerRelease(`${note}${synthesizer.octaveTwo}`, "+0.1");
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
    playNote("C", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("z", () => {
    stopNote(synthRef, synthTwoRef, "C", synthesizer);
  });
  useKeyDown("s", () => {
    playNote("C#", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("s", () => {
    stopNote(synthRef, synthTwoRef, "C#", synthesizer);
  });
  useKeyDown("x", () => {
    playNote("D", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("x", () => {
    stopNote(synthRef, synthTwoRef, "D", synthesizer);
  });
  useKeyDown("d", () => {
    playNote("D#", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("d", () => {
    stopNote(synthRef, synthTwoRef, "D#", synthesizer);
  });
  useKeyDown("c", () => {
    playNote("E", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("c", () => {
    stopNote(synthRef, synthTwoRef, "E", synthesizer);
  });
  useKeyDown("v", () => {
    playNote("F", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("v", () => {
    stopNote(synthRef, synthTwoRef, "F", synthesizer);
  });
  useKeyDown("g", () => {
    playNote("F#", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("g", () => {
    stopNote(synthRef, synthTwoRef, "F#", synthesizer);
  });
  useKeyDown("b", () => {
    playNote("G", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("b", () => {
    stopNote(synthRef, synthTwoRef, "G", synthesizer);
  });
  useKeyDown("h", () => {
    playNote("G#", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("h", () => {
    stopNote(synthRef, synthTwoRef, "G#", synthesizer);
  });
  useKeyDown("n", () => {
    playNote("A", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("n", () => {
    stopNote(synthRef, synthTwoRef, "A", synthesizer);
  });
  useKeyDown("j", () => {
    playNote("A#", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("j", () => {
    stopNote(synthRef, synthTwoRef, "A#", synthesizer);
  });
  useKeyDown("m", () => {
    playNote("B", synthesizer, synthRef, synthTwoRef);
  });
  useKeyUp("m", () => {
    stopNote(synthRef, synthTwoRef, "B", synthesizer);
  });
  return (
    <div className="keyboard">
      <div className="control-container">
        <div className="visualizer-two">
          <Sketch setup={setup} draw={draw} />
        </div>
        {/* This DropdownButton 
               selects a note-length */}
        <div className="control-title">Oscillator 1</div>
        <div className="drop-down">
          <DropdownButton
            id="dropdown-basic-button"
            title={`Osc 1 Octave: ${synthesizer.octave}`}
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
          {/* help button  */}
          {/* <button onClick={() => handleShow()}>?</button> */}
          <div className="slider-sm">
            <div className="slider-title-large lower">
              Osc 1 Volume: {synthesizer.volume}
            </div>
            <Slider
              value={synthesizer.volume}
              onChange={(e, newValue) => synthesizer.setVolume(newValue)}
              aria-labelledby="discrete-slider-small-steps"
              step={5}
              marks
              min={-30}
              max={10}
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        {/* This DropdownButton 
               selects a wave-form */}
        <div className="drop-down">
          <DropdownButton
            id="dropdown-basic-button"
            title={`Waveform 1: ${synthesizer.oscType}`}
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
        <div className="control-title">Oscillator 2</div>
        <div className="drop-down">
          <DropdownButton
            id="dropdown-basic-button"
            title={`Osc 2 Octave: ${synthesizer.octaveTwo}`}
            variant="dark"
            size="sm"
          >
            <Dropdown.Item onSelect={() => synthesizer.setOctaveTwo(1)}>
              1 - Lowest Pitch
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctaveTwo(2)}>
              2
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctaveTwo(3)}>
              3
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctaveTwo(4)}>
              4
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctaveTwo(5)}>
              5
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctaveTwo(6)}>
              6
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctaveTwo(7)}>
              7
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOctaveTwo(8)}>
              8 - Highest Pitch
            </Dropdown.Item>
          </DropdownButton>
          <div className="slider-sm">
            <div className="slider-title-large lower">
              Osc 2 Volume: {synthesizer.volumeTwo}
            </div>
            <Slider
              value={synthesizer.volumeTwo}
              onChange={(e, newValue) => synthesizer.setVolumeTwo(newValue)}
              aria-labelledby="discrete-slider-small-steps"
              step={5}
              marks
              min={-30}
              max={10}
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        {/* This DropdownButton 
               selects a wave-form */}
        <div className="drop-down">
          <DropdownButton
            id="dropdown-basic-button"
            title={`Waveform 2: ${synthesizer.oscTypeTwo}`}
            variant="dark"
            size="sm"
          >
            <Dropdown.Item
              onSelect={() => synthesizer.setOscTypeTwo("triangle")}
            >
              Triangle
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOscTypeTwo("square")}>
              Square
            </Dropdown.Item>
            <Dropdown.Item onSelect={() => synthesizer.setOscTypeTwo("sine")}>
              Sine
            </Dropdown.Item>
            <Dropdown.Item
              onSelect={() => synthesizer.setOscTypeTwo("sawtooth")}
            >
              Sawtooth
            </Dropdown.Item>
          </DropdownButton>
          {synthesizer.oscTypeTwo === "sine" && (
            <img className="wave" src="sine.png" />
          )}
          {synthesizer.oscTypeTwo === "triangle" && (
            <img className="wave" src="triangle.png" />
          )}
          {synthesizer.oscTypeTwo === "square" && (
            <img className="wave" src="square.png" />
          )}
          {synthesizer.oscTypeTwo === "sawtooth" && (
            <img className="wave" src="sawtooth.png" />
          )}
        </div>
        {/* This Slider 
               selects a distortion amount */}
        <div className="control-title">Effects</div>
        <div className="drop-down">
          {!distOn ? (
            <div className="effect-off" />
          ) : (
            <div className="effect-on" />
          )}
          <div className="slider-title-large">Distortion</div>
          <div className="slider-sm lower">
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
          <div className="slider-sm lower">
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
            <div className="slider-title-large lower">Delay Depth</div>
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
        <div>
          <Accordion className="position-right">
            <Card className="accordion">
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Help
              </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body className="cursor">
                  <img className="help-img" src="keyboardHelp.png" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
      <div className="note-container-blk">
        <div className="note-halfspace"></div>
        <button
          className="note-blk"
          onMouseDown={() => playNote("C#", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "C#", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "C#", synthesizer)}
        >
          C#
        </button>
        <button
          className="note-blk"
          onMouseDown={() => playNote("D#", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "D#", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "D#", synthesizer)}
        >
          D#
        </button>
        <div className="note-space"></div>
        <button
          className="note-blk"
          onMouseDown={() => playNote("F#", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "F#", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "F#", synthesizer)}
        >
          F#
        </button>
        <button
          className="note-blk"
          onMouseDown={() => playNote("G#", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "G#", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "G#", synthesizer)}
        >
          G#
        </button>
        <button
          className="note-blk"
          onMouseDown={() => playNote("A#", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "A#", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "A#", synthesizer)}
        >
          A#
        </button>
        <div className="note-halfspace"></div>
      </div>
      <div className="note-container-wht">
        <button
          className="note"
          onMouseDown={() => playNote("C", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "C", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "C", synthesizer)}
        >
          C
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("D", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "D", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "D", synthesizer)}
        >
          D
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("E", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "E", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "E", synthesizer)}
        >
          E
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("F", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "F", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "F", synthesizer)}
        >
          F
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("G", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "G", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "G", synthesizer)}
        >
          G
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("A", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "A", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "A", synthesizer)}
        >
          A
        </button>
        <button
          className="note"
          onMouseDown={() => playNote("B", synthesizer, synthRef, synthTwoRef)}
          onMouseUp={() => stopNote(synthRef, synthTwoRef, "B", synthesizer)}
          onMouseOut={() => stopNote(synthRef, synthTwoRef, "B", synthesizer)}
        >
          B
        </button>
      </div>
    </div>
  );
}
