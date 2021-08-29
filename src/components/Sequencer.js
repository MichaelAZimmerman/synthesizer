import React, { useEffect, useContext, useState } from "react";
import * as Tone from "tone";
import { SequencerContext } from "../context";

export default function Sequencer() {
  const { createSequence, sequence, setSequence } =
    useContext(SequencerContext);
  // create a synth
  const synth = new Tone.MembraneSynth().toDestination();
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
  ]);
  const [seqOneActiveA, setSeqOneActiveA] = useState(false);
  const [seqTwoActiveA, setSeqTwoActiveA] = useState(false);
  const [seqThreeActiveA, setSeqThreeActiveA] = useState(false);
  const [seqFourActiveA, setSeqFourActiveA] = useState(false);
  const [seqFiveActiveA, setSeqFiveActiveA] = useState(false);
  const [seqSixActiveA, setSeqSixActiveA] = useState(false);
  const [seqSevenActiveA, setSeqSevenActiveA] = useState(false);
  const [seqEightActiveA, setSeqEightActiveA] = useState(false);
  // create a new sequence with the synth and notes
  const synthPart = new Tone.Sequence(
    function (time, note) {
      synth.triggerAttackRelease(note, "10hz", time);
    },
    notes,
    "16n"
  );
  useEffect(() => {
    createSequence();
  }, []);
  return (
    <div>
      {!seqOneActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(0, 1, "C2");
            setNotes(newArr);
            setSeqOneActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(0, 1, null);
            setNotes(newArr);
            setSeqOneActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqTwoActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(1, 1, "C2");
            setNotes(newArr);
            setSeqTwoActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(1, 1, null);
            setNotes(newArr);
            setSeqTwoActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqThreeActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(2, 1, "C2");
            setNotes(newArr);
            setSeqThreeActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(2, 1, null);
            setNotes(newArr);
            setSeqThreeActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqFourActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(3, 1, "C2");
            setNotes(newArr);
            setSeqFourActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(3, 1, null);
            setNotes(newArr);
            setSeqFourActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqFiveActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(4, 1, "C2");
            setNotes(newArr);
            setSeqFiveActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(4, 1, null);
            setNotes(newArr);
            setSeqFiveActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqSixActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(5, 1, "C2");
            setNotes(newArr);
            setSeqSixActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(5, 1, null);
            setNotes(newArr);
            setSeqSixActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqSevenActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(6, 1, "C2");
            setNotes(newArr);
            setSeqSevenActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(6, 1, null);
            setNotes(newArr);
            setSeqSevenActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqEightActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(7, 1, "C2");
            setNotes(newArr);
            setSeqEightActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(7, 1, null);
            setNotes(newArr);
            setSeqEightActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      <br />
      {/* start button */}
      <button
        onClick={() => {
          synthPart.start();
          Tone.Transport.start();
        }}
      >
        start
      </button>
      <button
        onClick={() => {
          synthPart.stop();
          Tone.Transport.stop();
        }}
      >
        stop
      </button>
      {sequence && console.log(sequence)}
    </div>
  );
}
