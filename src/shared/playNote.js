import React from "react";
import * as Tone from "tone";

export default function playNote(note) {
  const bitCrush = 16;
  const distAmt = 1;
  const tremAmt = 0;
  const pingPongRate = "4n";
  const pingPongDepth = 0;
  const pingPong = new Tone.PingPongDelay(
    pingPongRate,
    pingPongDepth
  ).toDestination();
  const tremolo = new Tone.Tremolo(tremAmt, 1).toDestination().start();
  const crusher = new Tone.BitCrusher(bitCrush).toDestination();
  const dist = new Tone.Distortion(distAmt).toDestination();
  const synth = new Tone.Synth()
    .connect(dist)
    .connect(crusher)
    .connect(tremolo)
    .connect(pingPong);
  const oscType = "triangle";
  const octave = "4";
  const noteType = "8n";
  synth.oscillator.type = oscType;
  synth.triggerAttackRelease(`${note}${octave}`, noteType);
}
