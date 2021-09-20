import React, { useState, useEffect, useRef, useCallback } from "react";
import * as Tone from "tone";
import Drum from "./Sequences/Drum";
import { Modal, Button } from "react-bootstrap";
import KeySelector from "./Sequences/KeySelector";
import KeySelectorLead from "./Sequences/KeySelectorLead";
import Keys from "./Sequences/Keys";
import Slider from "@material-ui/core/Slider";
import Sketch from "react-p5";

export default function Sequencer() {
  const [squareMeter, setSquareMeter] = useState(false);
  const [oscilloscope, setOscilloscope] = useState(false);
  const [circleMeter, setCircleMeter] = useState(false);
  const [visualSync, setVisualSync] = useState(true);
  // const [beat, setBeat] = useState(0);
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(350, 40).parent(canvasParentRef);
    p5.textSize(10);
  };

  const draw = (p5) => {
    const opacity = p5.map(meter.getValue(), -150, 0, 50, 255, true);
    const opacityTwo = p5.map(meter.getValue(), -100, 0, 0, 255, true);
    const scale = p5.map(meterKick.getValue(), -30, 0, 0, 40, true);
    const scaleTwo = p5.map(meterSnare.getValue(), -40, 0, 0, 40, true);
    const scaleThree = p5.map(meterHats.getValue(), -40, -10, 0, 40, true);
    const scaleFour = p5.map(meterBass.getValue(), -30, -10, 0, 40, true);
    const scaleFive = p5.map(meterLead.getValue(), -30, 0, 0, 40, true);
    const values = analyser.getValue();
    const width = p5.map(meterKick.getValue(), -30, 0, 1, 50, true);
    const widthTwo = p5.map(meterSnare.getValue(), -40, 0, 1, 50, true);
    const widthThree = p5.map(meterHats.getValue(), -40, -10, 1, 50, true);
    const widthFour = p5.map(meterBass.getValue(), -30, -10, 1, 50, true);
    const widthFive = p5.map(meterLead.getValue(), -30, 0, 1, 50, true);

    p5.background(34, 97, 74, 255);

    if (squareMeter) {
      p5.stroke(74, 212, 109, opacityTwo);
      // p5.strokeWeight(100 * 0.0175);
      p5.strokeWeight(0);
      // p5.noFill();

      p5.fill(74, 212, 109, opacityTwo);

      // p5.circle(175, 20, -1 * scale);
      // p5.circle(125, 20, -1 * scaleTwo);
      // p5.circle(225, 20, -1 * scaleThree);
      p5.rect(175, scale / 2, 40, scale * 2);
      p5.rect(125, scaleTwo / 2, 40, scaleTwo * 2);
      p5.rect(225, scaleThree / 2, 40, scaleThree * 2);
      p5.rect(75, scaleFour / 2, 40, scaleFour * 2);
      p5.rect(275, scaleFive / 2, 40, scaleFive * 2);
      // p5.beginShape();
      // for (let i = 0; i < values.length; i++) {
      //   const amplitude = values[i];
      //   const x = p5.map(i, 20, values.length - 1, 0, 350);
      //   const y = 40 / 2 + amplitude * 20;
      //   // Place vertex
      //   p5.vertex(x, y);
      // }
      // p5.endShape();
      p5.stroke(74, 212, 109, opacity);
      p5.strokeWeight(100 * 0.0175);
      p5.fill(34, 97, 74, 255);
      p5.rect(0, 0, 65, 14);

      // p5.fill(74, 212, 109, opacity);
      // p5.strokeWeight(0);
      // p5.text(`Oscilloscope`, 2, 10);
      p5.fill(74, 212, 109, opacity);
      p5.strokeWeight(0);
      p5.text(`Square Meter`, 2, 10);
    } else if (oscilloscope) {
      p5.stroke(74, 212, 109, opacity);
      p5.strokeWeight(100 * 0.0175);

      p5.noFill();
      p5.beginShape();
      for (let i = 0; i < values.length; i++) {
        const amplitude = values[i];
        const x = p5.map(i, 20, values.length - 1, 0, 350);
        const y = 40 / 2 + amplitude * 20;
        // Place vertex
        p5.vertex(x, y);
      }
      p5.endShape();
      p5.strokeWeight(100 * 0.0175);
      p5.fill(34, 97, 74, 255);
      p5.rect(0, 0, 61, 14);

      p5.fill(74, 212, 109, opacity);
      p5.strokeWeight(0);
      p5.text(`Oscilloscope`, 2, 10);
    } else if (circleMeter) {
      p5.stroke(74, 212, 109, opacity);

      p5.noFill();
      p5.strokeWeight(width);
      p5.circle(175, 20, 50);
      p5.strokeWeight(widthTwo);
      p5.circle(175, 20, 110);
      p5.strokeWeight(widthThree);
      p5.circle(175, 20, 170);
      p5.strokeWeight(widthFour);
      p5.circle(175, 20, 230);
      p5.strokeWeight(widthFive);
      p5.circle(175, 20, 290);

      p5.strokeWeight(100 * 0.0175);
      p5.fill(34, 97, 74, 255);
      p5.rect(0, 0, 58, 14);

      p5.fill(74, 212, 109, opacity);
      p5.strokeWeight(0);
      p5.text(`Circle Meter`, 2, 10);
    }
    if (visualSync) {
      let beat;
      const position = transport.position;
      const posSplit = position.split(":");
      const count = posSplit[1];
      const subdivision = parseInt(posSplit[2]);

      if (count === "1") {
        beat = 4 + subdivision + 1;
      } else if (count === "2") {
        beat = 8 + subdivision + 1;
      } else if (count === "3") {
        beat = 12 + subdivision + 1;
      } else if (count === "0") {
        beat = 1 + subdivision;
      }
      p5.stroke(74, 212, 109, opacity);
      p5.strokeWeight(1);
      p5.noFill();
      // draws the grid of notes
      for (let i = 0; i < 16; i++) {
        let j = i + 1;
        if (notes[i] !== null) {
          p5.fill(74, 212, 109, opacity);
          p5.circle(i * 21 - 3 + 21, 5, 5);
        } else {
          p5.noFill();

          p5.circle(j * 21 - 3, 5, 5);
        }

        if (snareNotes[i] !== null) {
          p5.fill(74, 212, 109, opacity);
          p5.circle(i * 21 - 3 + 21, 12, 5);
        } else {
          p5.noFill();
          p5.circle(j * 21 - 3, 12, 5);
        }
        if (hihatNotes[i] !== null) {
          p5.fill(74, 212, 109, opacity);
          p5.circle(i * 21 - 3 + 21, 19, 5);
        } else {
          p5.noFill();
          p5.circle(j * 21 - 3, 19, 5);
        }
        if (bassNotes[i] !== null) {
          p5.fill(74, 212, 109, opacity);
          p5.circle(i * 21 - 3 + 21, 26, 5);
        } else {
          p5.noFill();
          p5.circle(j * 21 - 3, 26, 5);
        }
        if (leadNotes[i] !== null) {
          p5.fill(74, 212, 109, opacity);
          p5.circle(i * 21 - 3 + 21, 33, 5);
        } else {
          p5.noFill();
          p5.circle(j * 21 - 3, 33, 5);
        }
        p5.noFill();

        p5.circle(j * 21 - 3, 5, 5);
        // shows the active beat hits
        p5.fill(74, 212, 109, opacityTwo);
        p5.stroke(74, 212, 109, 0);
        if (j === beat && notes[i] !== null) {
          p5.circle(beat * 21 - 3, 5, 10);
        }
        if (j === beat && snareNotes[i] !== null) {
          p5.circle(beat * 21 - 3, 12, 10);
        }
        if (j === beat && hihatNotes[i] !== null) {
          p5.circle(beat * 21 - 3, 19, 10);
        }
        if (j === beat && bassNotes[i] !== null) {
          p5.circle(beat * 21 - 3, 26, 10);
        }
        if (j === beat && leadNotes[i] !== null) {
          p5.circle(beat * 21 - 3, 33, 10);
        }
        p5.stroke(74, 212, 109, opacity);
        // p5.circle(j * 21 - 3, 10, 5);
      }
      // p5.fill(74, 212, 109, opacityThree);
      // p5.stroke(74, 212, 109, opacityThree);
      // p5.circle(beat * 21 - 4, 10, 10);
      // console.log(count, subdivision, beat, notes);
    }
  };
  // const context = new Tone.Context({ latencyHint: "playback" });
  // // set this context as the global Context

  // Tone.setContext(context);

  // Tone.Context.lookAhead = 0.2;
  // Tone.Context.latencyHint = "playback";
  const [run, setRun] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [activeNote, setActiveNote] = useState("C2");
  const [activeNoteLead, setActiveNoteLead] = useState("C4");
  const [tempo, setTempo] = useState(120);
  const transport = Tone.Transport;
  const [play, setPlay] = useState(false);
  const kickRef = useRef(null);
  const snareRef = useRef(null);
  const snareNoiseRef = useRef(null);
  const hihatRef = useRef(null);
  const bassRef = useRef(null);
  const leadRef = useRef(null);
  const distRef = useRef(null);
  const meter = new Tone.Meter();
  const meterKick = new Tone.Meter();
  const meterSnare = new Tone.Meter();
  const meterHats = new Tone.Meter();
  const meterBass = new Tone.Meter();
  const meterLead = new Tone.Meter();
  const analyser = new Tone.Analyser("waveform", 512);
  // const dist = new Distortion(1).toDestination();
  useEffect(() => {
    distRef.current = new Tone.Distortion(1).toDestination();
    kickRef.current = new Tone.MembraneSynth().toDestination();

    snareRef.current = new Tone.MembraneSynth({
      volume: 3,
      detune: 2400,
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.01,
        release: 0.13,
      },
    }).connect(distRef.current);
    snareNoiseRef.current = new Tone.NoiseSynth({
      volume: 10,
      noise: {
        type: "pink",
        playbackRate: 6,
      },
      envelope: {
        attack: 0.001,
        decay: 0.13,
        sustain: 0,
        release: 0.03,
      },
    }).connect(distRef.current);
    hihatRef.current = new Tone.NoiseSynth({
      volume: -12,
      noise: {
        type: "white",
        playbackRate: 6,
      },
      envelope: {
        attack: 0.001,
        decay: 0.13,
        sustain: 0,
        release: 0.03,
      },
    }).toDestination();
    bassRef.current = new Tone.Synth({
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.2,
        release: 0.13,
      },
      oscillator: { type: "triangle" },
    }).connect(distRef.current);
    leadRef.current = new Tone.Synth({
      volume: -6,
      envelope: {
        attack: 0.001,
        decay: 0.2,
        sustain: 0.2,
        release: 0.23,
      },
      oscillator: { type: "sawtooth" },
    }).toDestination();
  }, []);
  useEffect(() => {
    let timer1 = setTimeout(() => setRun(true), 5000);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  if (run) {
    Tone.Destination.chain(analyser, meter);
    kickRef.current.connect(meterKick);
    snareRef.current.connect(meterSnare);
    hihatRef.current.connect(meterHats);
    bassRef.current.connect(meterBass);
    leadRef.current.connect(meterLead);
  }
  // const bassSynth = new Tone.Synth({
  //   envelope: {
  //     attack: 0.001,
  //     decay: 0.1,
  //     sustain: 0.2,
  //     release: 0.13,
  //   },
  // }).connect(dist);
  // bassSynth.oscillator.type = "triangle";
  // const leadSynth = new Tone.Synth({
  //   volume: -12,
  //   envelope: {
  //     attack: 0.001,
  //     decay: 0.2,
  //     sustain: 0.2,
  //     release: 0.23,
  //   },
  // }).toDestination();
  // leadSynth.oscillator.type = "square";
  // const leadSynthTwo = new Tone.Synth({
  //   volume: -6,
  //   envelope: {
  //     attack: 0.001,
  //     decay: 0.2,
  //     sustain: 0.2,
  //     release: 0.23,
  //   },
  //   oscillator: { type: "sawtooth" },
  // }).toDestination();
  // leadSynthTwo.oscillator.type = "sawtooth";
  //   const lowPass = new Filter({
  //     frequency: 11000,
  //   }).connect(dist);
  // const hihatSynth = new NoiseSynth({
  //   volume: -12,
  //   noise: {
  //     type: "white",
  //     playbackRate: 6,
  //   },
  //   envelope: {
  //     attack: 0.001,
  //     decay: 0.13,
  //     sustain: 0,
  //     release: 0.03,
  //   },
  // }).toDestination();
  // const snareSynth = new Tone.MembraneSynth({
  //   volume: 3,
  //   detune: 2400,
  //   envelope: {
  //     attack: 0.001,
  //     decay: 0.1,
  //     sustain: 0.01,
  //     release: 0.13,
  //   },
  // }).connect(dist);
  // const noiseTwo = new NoiseSynth({
  //   volume: 6,
  //   noise: {
  //     type: "white",
  //     playbackRate: 12,
  //   },
  //   envelope: {
  //     attack: 0.001,
  //     decay: 0.03,
  //     sustain: 0,
  //     release: 0.03,
  //   },
  // }).toDestination();
  // const noise = new NoiseSynth({
  //   volume: 10,
  //   noise: {
  //     type: "pink",
  //     playbackRate: 6,
  //   },
  //   envelope: {
  //     attack: 0.001,
  //     decay: 0.13,
  //     sustain: 0,
  //     release: 0.03,
  //   },
  // }).connect(dist);
  const [leadNotes, setLeadNotes] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [bassNotes, setBassNotes] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [hihatNotes, setHihatNotes] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [snareNotes, setSnareNotes] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  // create an array of notes to be played
  const [notes, setNotes] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  //   // create a new sequence with the synth and notes
  const hihatPart = new Tone.Sequence(
    function (time, note) {
      hihatRef.current.triggerAttackRelease("10hz", time);
    },
    hihatNotes,
    "16n"
  );
  const snarePart = new Tone.Sequence(
    function (time, note) {
      snareNoiseRef.current.triggerAttackRelease("10hz", time);
      // noiseTwo.triggerAttackRelease("10hz", time);
      snareRef.current.triggerAttackRelease(note, "10hz", time);
    },
    snareNotes,
    "16n"
  );
  const synthPart = new Tone.Sequence(
    function (time, note) {
      kickRef.current.triggerAttackRelease(note, "10hz", time);
    },
    notes,
    "16n"
  );
  const bassPart = new Tone.Sequence(
    function (time, note) {
      bassRef.current.triggerAttackRelease(note, "10hz", time);
    },
    bassNotes,
    "16n"
  );
  const leadPart = new Tone.Sequence(
    function (time, note) {
      // leadSynth.triggerAttackRelease(note, "10hz", time);
      leadRef.current.triggerAttackRelease(note, "10hz", time);
    },
    leadNotes,
    "16n"
  );

  useEffect(() => {
    if (play) {
      hihatPart.stop();
      synthPart.stop();
      snarePart.stop();
      bassPart.stop();
      leadPart.stop();
      transport.stop();
      transport.cancel();
      setPlay(false);
      handleShow();
    }
  }, [notes, hihatNotes, snareNotes, bassNotes, leadNotes]);

  useEffect(() => {
    transport.bpm.value = tempo;
  }, [tempo, setTempo, transport.bpm]);

  return (
    <div className="sequencer">
      <div className="visualizer">
        <Sketch setup={setup} draw={draw} />
        {oscilloscope && (
          <div
            className="visual-changer"
            onClick={() => {
              setOscilloscope(false);
              setSquareMeter(true);
            }}
          >
            Click here to change visualization mode
          </div>
        )}
        {squareMeter && (
          <div
            className="visual-changer"
            onClick={() => {
              setSquareMeter(false);
              setCircleMeter(true);
            }}
          >
            Click here to change visualization mode
          </div>
        )}
        {circleMeter && (
          <div
            className="visual-changer"
            onClick={() => {
              setCircleMeter(false);

              setVisualSync(true);
            }}
          >
            Click here to change visualization mode
          </div>
        )}
        {visualSync && (
          <div
            className="visual-changer"
            onClick={() => {
              setVisualSync(false);

              setOscilloscope(true);
            }}
          >
            Click here to change visualization mode
          </div>
        )}
      </div>
      <div className="tempo">
        <p className="slider-title">Tempo ({tempo} BPM):</p>
        <div className="slider-sm">
          <Slider
            value={tempo}
            onChange={(e, newValue) => setTempo(newValue)}
            aria-labelledby="discrete-slider-small-steps"
            step={10}
            marks
            min={60}
            max={180}
            valueLabelDisplay="auto"
          />
        </div>
      </div>
      <div>Bass Drum</div>
      <Drum notes={notes} setNotes={setNotes} />
      {/* <br /> */}
      <div>Snare</div>
      <Drum notes={snareNotes} setNotes={setSnareNotes} />
      <div>Hi-Hat</div>
      <Drum notes={hihatNotes} setNotes={setHihatNotes} />
      <div>Bass Synth</div>
      <KeySelector
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        synth={bassRef.current}
      />
      <Keys notes={bassNotes} setNotes={setBassNotes} activeNote={activeNote} />
      <div>Lead Synth</div>
      <KeySelectorLead
        activeNote={activeNoteLead}
        setActiveNote={setActiveNoteLead}
        synth={leadRef.current}
      />
      <Keys
        notes={leadNotes}
        setNotes={setLeadNotes}
        activeNote={activeNoteLead}
      />
      {/* <br /> */}
      {/* start button */}
      {!play ? (
        <button
          className="start"
          onClick={async () => {
            await Tone.start();
            hihatPart.start();
            synthPart.start();
            snarePart.start();
            bassPart.start();
            leadPart.start();
            transport.start();
            setPlay(true);
          }}
        >
          START
        </button>
      ) : (
        <button
          className="stop"
          onClick={() => {
            hihatPart.stop();
            synthPart.stop();
            snarePart.stop();
            bassPart.stop();
            leadPart.stop();
            transport.stop();
            // transport.position = 0;
            transport.cancel();

            setPlay(false);
          }}
        >
          STOP
        </button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-header">Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          Sequence can only be changed while it is not in play.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
