import React, { useState } from "react";

function DrumTwo({ notes, setNotes }) {
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
            newArr.splice(16, 1, "C2");
            setNotes(newArr);
            setSeqOneActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(16, 1, null);
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
            newArr.splice(17, 1, "C2");
            setNotes(newArr);
            setSeqTwoActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(17, 1, null);
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
            newArr.splice(18, 1, "C2");
            setNotes(newArr);
            setSeqThreeActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(18, 1, null);
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
            newArr.splice(19, 1, "C2");
            setNotes(newArr);
            setSeqFourActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(19, 1, null);
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
            newArr.splice(20, 1, "C2");
            setNotes(newArr);
            setSeqFiveActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(20, 1, null);
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
            newArr.splice(21, 1, "C2");
            setNotes(newArr);
            setSeqSixActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(21, 1, null);
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
            newArr.splice(22, 1, "C2");
            setNotes(newArr);
            setSeqSevenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(22, 1, null);
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
            newArr.splice(23, 1, "C2");
            setNotes(newArr);
            setSeqEightActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(23, 1, null);
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
            newArr.splice(24, 1, "C2");
            setNotes(newArr);
            setSeqNineActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(24, 1, null);
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
            newArr.splice(25, 1, "C2");
            setNotes(newArr);
            setSeqTenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(25, 1, null);
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
            newArr.splice(26, 1, "C2");
            setNotes(newArr);
            setSeqElevenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(26, 1, null);
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
            newArr.splice(27, 1, "C2");
            setNotes(newArr);
            setSeqTwelveActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(27, 1, null);
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
            newArr.splice(28, 1, "C2");
            setNotes(newArr);
            setSeqThirteenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(28, 1, null);
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
            newArr.splice(29, 1, "C2");
            setNotes(newArr);
            setSeqFourteenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(29, 1, null);
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
            newArr.splice(30, 1, "C2");
            setNotes(newArr);
            setSeqFifteenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(30, 1, null);
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
            newArr.splice(31, 1, "C2");
            setNotes(newArr);
            setSeqSixteenActiveA(true);
          }}
        ></div>
      ) : (
        <div
          className="seq-note-on"
          onClick={() => {
            let newArr = [...notes];
            newArr.splice(31, 1, null);
            setNotes(newArr);
            setSeqSixteenActiveA(false);
          }}
        ></div>
      )}
    </div>
  );
}

export default DrumTwo;
