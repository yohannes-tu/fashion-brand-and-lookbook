// Pure Web Audio ambient drone generator for avant-garde runway experience
let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let osc1: OscillatorNode | null = null;
let osc2: OscillatorNode | null = null;
let filter: BiquadFilterNode | null = null;

export function toggleAmbientSound(currentPlaying: boolean): boolean {
  if (currentPlaying) {
    stopAmbientSound();
    return false;
  } else {
    startAmbientSound();
    return true;
  }
}

export function startAmbientSound() {
  try {
    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (masterGain) {
      return;
    }

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    // Smooth fade in
    masterGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 2.0);

    // Warm resonant lowpass filter
    filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(140, audioCtx.currentTime);
    filter.Q.setValueAtTime(2.5, audioCtx.currentTime);

    // Fundamental atmospheric drone (55Hz - A1 note)
    osc1 = audioCtx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(55, audioCtx.currentTime);

    // Subtle detuned binaural frequency (55.4Hz) for rich runway drone
    osc2 = audioCtx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(55.4, audioCtx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(audioCtx.destination);

    osc1.start();
    osc2.start();
  } catch (err) {
    console.warn('Web Audio not supported or blocked:', err);
  }
}

export function stopAmbientSound() {
  if (!audioCtx || !masterGain) return;
  try {
    masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
    setTimeout(() => {
      osc1?.stop();
      osc2?.stop();
      osc1?.disconnect();
      osc2?.disconnect();
      masterGain?.disconnect();
      filter?.disconnect();
      osc1 = null;
      osc2 = null;
      filter = null;
      masterGain = null;
    }, 850);
  } catch (err) {
    console.warn('Error stopping audio:', err);
  }
}
