import React, { useState, useEffect, useRef } from "react";
import * as Tone from "tone";
import Drum from "./Sequences/Drum";
import { Modal, Button } from "react-bootstrap";
import KeySelector from "./Sequences/KeySelector";
import KeySelectorLead from "./Sequences/KeySelectorLead";
import Keys from "./Sequences/Keys";
import Slider from "@material-ui/core/Slider";
import Sketch from "react-p5";

export default function Sequencer() {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(350, 40).parent(canvasParentRef);
  };

  const draw = (p5) => {
    // const scale = p5.map(meter.getValue(), -100, -20, 5, 1, true);
    const values = analyser.getValue();

    p5.background(34, 97, 74, 255);
    p5.stroke(74, 212, 109, 255);
    p5.strokeWeight(100 * 0.0175);
    p5.noFill();
    // p5.fill(74, 212, 109, 125);

    // p5.circle(175, 20, -100 * 0.1 * scale);

    // if (play) {

    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i];
      const x = p5.map(i, 20, values.length - 1, 0, 350);
      const y = 40 / 2 + amplitude * 20;
      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
    // }
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
  };
  // const context = new Tone.Context({ latencyHint: "playback" });
  // // set this context as the global Context

  // Tone.setContext(context);

  Tone.Context.lookAhead = 0.2;
  Tone.Context.latencyHint = "playback";

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
  Tone.Destination.chain(analyser, meter);

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
            hihatPart.start("+0.2");
            synthPart.start("+0.2");
            snarePart.start("+0.2");
            bassPart.start("+0.2");
            leadPart.start("+0.2");
            transport.start("+0.2");
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
