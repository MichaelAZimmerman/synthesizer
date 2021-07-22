export default function playNote(note, synthesizer, synth, env, tremolo) {
  tremolo.start();
  synth.triggerAttackRelease(
    `${note}${synthesizer.octave}`,
    synthesizer.noteType
  );
  env.triggerAttackRelease(synthesizer.noteType);
}
