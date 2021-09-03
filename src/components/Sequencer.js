import React, { useState, useEffect } from "react";
import * as Tone from "tone";
import Drum from "./Sequences/Drum";
import { NoiseSynth, Distortion } from "tone";
import { Modal, Button } from "react-bootstrap";
import KeySelector from "./Sequences/KeySelector";
import KeySelectorLead from "./Sequences/KeySelectorLead";
import Keys from "./Sequences/Keys";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

export default function Sequencer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [activeNote, setActiveNote] = useState("C3");
  const [activeNoteLead, setActiveNoteLead] = useState("C4");
  const [tempo, setTempo] = useState(120);
  const transport = Tone.Transport;
  const [play, setPlay] = useState(false);
  const synth = new Tone.MembraneSynth().toDestination();

  const dist = new Distortion(1).toDestination();
  const bassSynth = new Tone.Synth({
    envelope: {
      attack: 0.001,
      decay: 0.1,
      sustain: 0.2,
      release: 0.13,
    },
  }).connect(dist);
  bassSynth.oscillator.type = "triangle";
  const leadSynth = new Tone.Synth({
    volume: -12,
    envelope: {
      attack: 0.001,
      decay: 0.2,
      sustain: 0.2,
      release: 0.23,
    },
  }).toDestination();
  leadSynth.oscillator.type = "square";
  const leadSynthTwo = new Tone.Synth({
    volume: -12,
    envelope: {
      attack: 0.001,
      decay: 0.2,
      sustain: 0.2,
      release: 0.23,
    },
  }).toDestination();
  leadSynthTwo.oscillator.type = "sawtooth";
  //   const lowPass = new Filter({
  //     frequency: 11000,
  //   }).connect(dist);
  const hihatSynth = new NoiseSynth({
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
  const snareSynth = new Tone.MembraneSynth({
    volume: 3,
    detune: 2400,
    envelope: {
      attack: 0.001,
      decay: 0.1,
      sustain: 0.01,
      release: 0.13,
    },
  }).connect(dist);
  const noiseTwo = new NoiseSynth({
    volume: 6,
    noise: {
      type: "white",
      playbackRate: 12,
    },
    envelope: {
      attack: 0.001,
      decay: 0.03,
      sustain: 0,
      release: 0.03,
    },
  }).toDestination();
  const noise = new NoiseSynth({
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
  }).connect(dist);
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
      hihatSynth.triggerAttackRelease("10hz", time);
    },
    hihatNotes,
    "16n"
  );
  const snarePart = new Tone.Sequence(
    function (time, note) {
      noise.triggerAttackRelease("10hz", time);
      noiseTwo.triggerAttackRelease("10hz", time);
      snareSynth.triggerAttackRelease(note, "10hz", time);
    },
    snareNotes,
    "16n"
  );
  const synthPart = new Tone.Sequence(
    function (time, note) {
      synth.triggerAttackRelease(note, "10hz", time);
    },
    notes,
    "16n"
  );
  const bassPart = new Tone.Sequence(
    function (time, note) {
      bassSynth.triggerAttackRelease(note, "10hz", time);
    },
    bassNotes,
    "16n"
  );
  const leadPart = new Tone.Sequence(
    function (time, note) {
      leadSynth.triggerAttackRelease(note, "10hz", time);
      leadSynthTwo.triggerAttackRelease(note, "10hz", time);
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
    <div>
      <div className="tempo">
        <p className="slider-title">Tempo ({tempo} BPM):</p>
        <div className="slider-sm">
          <Slider
            value={tempo}
            onChange={(e, newValue) => setTempo(newValue)}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
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
        synth={bassSynth}
      />
      <Keys notes={bassNotes} setNotes={setBassNotes} activeNote={activeNote} />
      <div>Lead Synth</div>
      <KeySelectorLead
        activeNote={activeNoteLead}
        setActiveNote={setActiveNoteLead}
        synth={leadSynth}
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
          onClick={() => {
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
            transport.cancel();

            setPlay(false);
          }}
        >
          STOP
        </button>
      )}
      <button
        onClick={() => {
          hihatPart.cancel();
          synthPart.cancel();
          snarePart.cancel();
          bassPart.cancel();
          leadPart.cancel();
          console.log("cancel");
        }}
      >
        log
      </button>
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
