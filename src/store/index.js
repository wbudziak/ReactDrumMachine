import { configureStore } from "@reduxjs/toolkit";
import soundSlice from "../store/sounds";

const store = configureStore({
  reducer: { sound: soundSlice.reducer },
});

export default store;
