import React, { useState, createContext, useCallback } from "react";
import * as Tone from "tone";

export const SequencerContext = createContext(null);

export function SequencerProvider(props) {
  // declaring the notes for each row
  // const notes = ["F4", "Eb4", "C4", "Bb3", "Ab3", "F3"];

  // const [sequence, setSequence] = useState([]);

  // const createSequence = useCallback(() => {
  //   setSequence((curr) => {
  //     let arr = new Array(16);
  //     for (let i = 0; i < 16; i++) {
  //       arr[i] = { note: "C4", column: [i], row: 1 };
  //     }
  //     return arr;
  //   });
  // }, [sequence]);

  // const makeSynths = (count) => {
  //   const synths = [];
  //   for (let i = 0; i < count; i++) {
  //     let synth = new Tone.Synth({
  //       oscillator: {
  //         type: "sawtooth",
  //       },
  //     }).toDestination();

  //     synths.push(synth);
  //   }

  //   return synths;
  // };

  // const makeGrid = (notes) => {
  //   const rows = [];
  //   for (const note of notes) {
  //     const row = [];
  //     // each subarray contains multiple objects that have an assigned note
  //     // and a boolean to flag whether they are "activated"
  //     // each element in the subarray corresponds to one eigth note
  //     for (let i = 0; i < 8; i++) {
  //       row.push({
  //         note: note,
  //         isActive: false,
  //       });
  //     }
  //     rows.push(row);
  //   }

  //   // we now have 6 rows each containing 16 eighth notes
  //   return rows;
  // };

  // const synths = makeSynths(6);
  // const grid = makeGrid(notes);
  // let beat = 0;
  // let playing = false;
  // let started = false;

  // const configLoop = () => {
  //   const repeat = (time) => {
  //     grid.forEach((row, index) => {
  //       let synth = synths[index];
  //       let note = row[beat];
  //       if (note.isActive) {
  //         synth.triggerAttackRelease(note.note, "8n", time);
  //       }
  //     });

  //     beat = (beat + 1) % 8;
  //   };

  //   Tone.Transport.bpm.value = 120;
  //   Tone.Transport.scheduleRepeat(repeat, "8n");
  // };

  return (
    <SequencerContext.Provider value={{}}>
      {props.children}
    </SequencerContext.Provider>
  );
}
