import { useRef } from "react";
import { sLinnDrum } from "../../samples/linnDrum";

import { soundActions } from "../../store/sounds";
import { useDispatch } from "react-redux";

const AddSound = () => {
  const dispatch = useDispatch();

  const selectedSoundRef = useRef();

  const selectSoundHandler = () => {
    dispatch(soundActions.addSound(sLinnDrum[selectedSoundRef.current.value]));
  };

  return (
    <>
      <div>
        <select ref={selectedSoundRef}>
          {sLinnDrum.map((sample, index) => (
            <option value={index} key={sample.soundName}>
              {sample.soundName}
            </option>
          ))}
        </select>

        <button onClick={selectSoundHandler}>Add sound</button>
      </div>
    </>
  );
};

export default AddSound;
