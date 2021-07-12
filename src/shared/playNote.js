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
    attack: synthesizer.attack,
    decay: synthesizer.decay,
    sustain: synthesizer.sustain,
    release: synthesizer.release,
  }).toDestination();
  const comp = new Tone.Compressor(-30, 3);
  const synth = new Tone.Synth(env)
    .connect(dist)
    .connect(tremolo)
    .connect(pingPong);
  synth.oscillator.type = synthesizer.oscType;
  synth.triggerAttackRelease(
    `${note}${synthesizer.octave}`,
    synthesizer.noteType
  );
  env.triggerAttackRelease(synthesizer.noteType);
}
