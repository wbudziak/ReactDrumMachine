import Kick from "./samples/linn-Kick.wav";
import Snare from "./samples/linn-SNARE-2.wav";
import OpenHH from "./samples/linn-HHOPEN1.wav";
import CloseHH from "./samples/linn-HHCLOSE1.wav";
import Clap from "./samples/linn-Clap-1.wav";
import SDL from "./samples/linn-SDL.wav";

const initialSounds = Array.from({ length: 16 }, (_, index) => ({
  volume: 1,
  on: false,
}));

export const sLinnDrum = [
  {
    soundFile: Kick,
    soundType: "kick",
    soundName: "Kick",
    sounds: initialSounds,
  },
  {
    soundFile: Clap,
    soundType: "Clap",
    soundName: "Clap",
    sounds: initialSounds,
  },
  {
    soundFile: OpenHH,
    soundType: "Open HH",
    soundName: "Open HH",
    sounds: initialSounds,
  },
  {
    soundFile: CloseHH,
    soundType: "Close HH",
    soundName: "Close HH",
    sounds: initialSounds,
  },
  {
    soundFile: Snare,
    soundType: "Snare",
    soundName: "Snare",
    sounds: initialSounds,
  },
  {
    soundFile: SDL,
    soundType: "SLD",
    soundName: "SLD",
    sounds: initialSounds,
  },
];
