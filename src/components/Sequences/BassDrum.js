import React, { useState, useEffect } from "react";
import * as Tone from "tone";

function BassDrum({ notes, setNotes, synth }) {
  const [seqOneActiveA, setSeqOneActiveA] = useState(false);
  const [seqTwoActiveA, setSeqTwoActiveA] = useState(false);
  const [seqThreeActiveA, setSeqThreeActiveA] = useState(false);
  const [seqFourActiveA, setSeqFourActiveA] = useState(false);
  const [seqFiveActiveA, setSeqFiveActiveA] = useState(false);
  const [seqSixActiveA, setSeqSixActiveA] = useState(false);
  const [seqSevenActiveA, setSeqSevenActiveA] = useState(false);
  const [seqEightActiveA, setSeqEightActiveA] = useState(false);
  const [seqNineActiveA, setSeqNineActiveA] = useState(false);
  const [seqTenActiveA, setSeqTenActiveA] = useState(false);
  const [seqElevenActiveA, setSeqElevenActiveA] = useState(false);
  const [seqTwelveActiveA, setSeqTwelveActiveA] = useState(false);
  const [seqThirteenActiveA, setSeqThirteenActiveA] = useState(false);
  const [seqFourteenActiveA, setSeqFourteenActiveA] = useState(false);
  const [seqFifteenActiveA, setSeqFifteenActiveA] = useState(false);
  const [seqSixteenActiveA, setSeqSixteenActiveA] = useState(false);
  // create a new sequence with the synth and notes
  //   const synthPart = useState(
  //     new Tone.Sequence(
  //       function (time, note) {
  //         synth.triggerAttackRelease(note, "10hz", time);
  //       },
  //       notes,
  //       "16n"
  //     )
  //   );
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
      {/* halfway there */}
      {!seqNineActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(8, 1, "C2");
            setNotes(newArr);
            setSeqNineActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(8, 1, null);
            setNotes(newArr);
            setSeqNineActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqTenActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(9, 1, "C2");
            setNotes(newArr);
            setSeqTenActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(9, 1, null);
            setNotes(newArr);
            setSeqTenActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqElevenActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(10, 1, "C2");
            setNotes(newArr);
            setSeqElevenActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(10, 1, null);
            setNotes(newArr);
            setSeqElevenActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqTwelveActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(11, 1, "C2");
            setNotes(newArr);
            setSeqTwelveActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(11, 1, null);
            setNotes(newArr);
            setSeqTwelveActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqThirteenActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(12, 1, "C2");
            setNotes(newArr);
            setSeqThirteenActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(12, 1, null);
            setNotes(newArr);
            setSeqThirteenActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqFourteenActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(13, 1, "C2");
            setNotes(newArr);
            setSeqFourteenActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(13, 1, null);
            setNotes(newArr);
            setSeqFourteenActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqFifteenActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(14, 1, "C2");
            setNotes(newArr);
            setSeqFifteenActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(14, 1, null);
            setNotes(newArr);
            setSeqFifteenActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
      {!seqSixteenActiveA ? (
        <button
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(15, 1, "C2");
            setNotes(newArr);
            setSeqSixteenActiveA(true);
            console.log(notes);
          }}
        ></button>
      ) : (
        <button
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(15, 1, null);
            setNotes(newArr);
            setSeqSixteenActiveA(false);
            console.log(notes);
          }}
        ></button>
      )}
    </div>
  );
}

export default BassDrum;
