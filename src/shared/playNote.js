import React from "react";
import * as Tone from "tone";

export default function playNote(note, synthesizer) {
  const pingPong = new Tone.PingPongDelay(
    synthesizer.pingPongRate,
    synthesizer.pingPongDepth
  ).toDestination();
  const tremolo = new Tone.Tremolo(synthesizer.tremAmt, 1)
    .toDestination()
    .start();
  const crusher = new Tone.BitCrusher(synthesizer.bitCrush).toDestination();
  const dist = new Tone.Distortion(synthesizer.distAmt).toDestination();
  const synth = new Tone.Synth()
    .connect(dist)
    .connect(crusher)
    .connect(tremolo)
    .connect(pingPong);
  synth.oscillator.type = synthesizer.oscType;
  synth.triggerAttackRelease(
    `${note}${synthesizer.octave}`,
    synthesizer.noteType
  );
}
