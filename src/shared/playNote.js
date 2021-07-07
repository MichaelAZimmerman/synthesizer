import React from "react";
import * as Tone from "tone";

export default function playNote(note) {
  const synth = new Tone.Synth().toDestination();
  synth.oscillator.type = "sawtooth";

  synth.triggerAttackRelease(`${note}4`, "8n");
}
