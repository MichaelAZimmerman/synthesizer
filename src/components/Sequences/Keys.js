import React, { useState } from "react";

function Keys({ notes, setNotes, activeNote }) {
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
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(0, 1, activeNote);
            setNotes(newArr);
            setSeqOneActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(0, 1, null);
            setNotes(newArr);
            setSeqOneActiveA(false);
          }}
        ></div>
      )}
      {!seqTwoActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(1, 1, activeNote);
            setNotes(newArr);
            setSeqTwoActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(1, 1, null);
            setNotes(newArr);
            setSeqTwoActiveA(false);
          }}
        ></div>
      )}
      {!seqThreeActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(2, 1, activeNote);
            setNotes(newArr);
            setSeqThreeActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(2, 1, null);
            setNotes(newArr);
            setSeqThreeActiveA(false);
          }}
        ></div>
      )}
      {!seqFourActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(3, 1, activeNote);
            setNotes(newArr);
            setSeqFourActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(3, 1, null);
            setNotes(newArr);
            setSeqFourActiveA(false);
          }}
        ></div>
      )}
      {!seqFiveActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(4, 1, activeNote);
            setNotes(newArr);
            setSeqFiveActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(4, 1, null);
            setNotes(newArr);
            setSeqFiveActiveA(false);
          }}
        ></div>
      )}
      {!seqSixActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(5, 1, activeNote);
            setNotes(newArr);
            setSeqSixActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(5, 1, null);
            setNotes(newArr);
            setSeqSixActiveA(false);
          }}
        ></div>
      )}
      {!seqSevenActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(6, 1, activeNote);
            setNotes(newArr);
            setSeqSevenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(6, 1, null);
            setNotes(newArr);
            setSeqSevenActiveA(false);
          }}
        ></div>
      )}
      {!seqEightActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(7, 1, activeNote);
            setNotes(newArr);
            setSeqEightActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(7, 1, null);
            setNotes(newArr);
            setSeqEightActiveA(false);
          }}
        ></div>
      )}
      {/* halfway there */}
      {!seqNineActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(8, 1, activeNote);
            setNotes(newArr);
            setSeqNineActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(8, 1, null);
            setNotes(newArr);
            setSeqNineActiveA(false);
          }}
        ></div>
      )}
      {!seqTenActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(9, 1, activeNote);
            setNotes(newArr);
            setSeqTenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(9, 1, null);
            setNotes(newArr);
            setSeqTenActiveA(false);
          }}
        ></div>
      )}
      {!seqElevenActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(10, 1, activeNote);
            setNotes(newArr);
            setSeqElevenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(10, 1, null);
            setNotes(newArr);
            setSeqElevenActiveA(false);
          }}
        ></div>
      )}
      {!seqTwelveActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(11, 1, activeNote);
            setNotes(newArr);
            setSeqTwelveActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(11, 1, null);
            setNotes(newArr);
            setSeqTwelveActiveA(false);
          }}
        ></div>
      )}
      {!seqThirteenActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(12, 1, activeNote);
            setNotes(newArr);
            setSeqThirteenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(12, 1, null);
            setNotes(newArr);
            setSeqThirteenActiveA(false);
          }}
        ></div>
      )}
      {!seqFourteenActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(13, 1, activeNote);
            setNotes(newArr);
            setSeqFourteenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(13, 1, null);
            setNotes(newArr);
            setSeqFourteenActiveA(false);
          }}
        ></div>
      )}
      {!seqFifteenActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(14, 1, activeNote);
            setNotes(newArr);
            setSeqFifteenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(14, 1, null);
            setNotes(newArr);
            setSeqFifteenActiveA(false);
          }}
        ></div>
      )}
      {!seqSixteenActiveA ? (
        <div
          className="seq-note-off"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(15, 1, activeNote);
            setNotes(newArr);
            setSeqSixteenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(15, 1, null);
            setNotes(newArr);
            setSeqSixteenActiveA(false);
          }}
        ></div>
      )}
    </div>
  );
}

export default Keys;
