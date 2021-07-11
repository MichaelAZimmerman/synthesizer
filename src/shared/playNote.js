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
  const dist = new Tone.Distortion(synthesizer.distAmt).toDestination();
  const env = new Tone.Envelope({
    attack: 0.1,
    decay: 0.2,
    sustain: 0.5,
    release: 0.8,
  }).toDestination();
  const synth = new Tone.Synth()
    .connect(dist)
    .connect(tremolo)
    .connect(pingPong);
  synth.oscillator.type = synthesizer.oscType;
  synth.triggerAttackRelease(
    `${note}${synthesizer.octave}`,
    synthesizer.noteType
  );
  env.triggerAttackRelease(0.5);
}
