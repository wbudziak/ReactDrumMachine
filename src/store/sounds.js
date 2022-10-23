import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const soundSlice = createSlice({
  name: "sound",
  initialState: {
    tempo: 85,
    bars: 16,
    sequence: [],
  },
  reducers: {
    loadSequence(state, action) {
      state.sequence = action.payload;
    },

    removeSound(state, action) {
      const id = action.payload;
      state.sequence.splice(id, 1);
    },

    addSound(state, action) {
      const sound = action.payload;
      state.sequence.push(sound);
    },

    updateSound(state, action) {
      const { id, soundId, array } = action.payload;

      let soundsArray = [...state.sequence[id].sounds];

      if (state.sequence[id].sounds[soundId].on) {
        soundsArray.splice(soundId, 1, {
          ...soundsArray[soundId],
          on: false,
        });
      } else {
        soundsArray.splice(soundId, 1, {
          ...soundsArray[soundId],
          on: true,
        });
      }

      state.sequence.splice(id, 1, {
        ...state.sequence[id],
        sounds: soundsArray,
      });
    },

    resetSound(state, action) {
      state.sequence = action.payload;
    },

    setTempo(state, action) {
      const tempo = action.payload;
      state.tempo = tempo;
    },
  },
});
export const soundActions = soundSlice.actions;
export default soundSlice;
