import { useEffect, useState } from "react";

// SOUNDS --------------------------------------------------->

import { sLinnDrum } from "../samples/linnDrum/index";

// REDUX ---------------------------------------------------->

import { soundActions } from "../store/sounds";
import { useSelector, useDispatch } from "react-redux";

function useLogic() {
  const dispatch = useDispatch();

  // REDUX VARIABLES ---------------------------------------->

  const soundArray = sLinnDrum;

  const tempoValue = useSelector((state) => state.sound.tempo);

  const bars = useSelector((state) => state.sound.bars);

  const sequence = useSelector((state) => state.sound.sequence);

  useEffect(() => {
    dispatch(soundActions.loadSequence(soundArray));
  }, []);

  // HOOK VARIABLES ----------------------------------------->

  const [isPlaying, setIsPlaying] = useState(false);
  let [rowId, setRowId] = useState(0);
  let [impulse, setImpulse] = useState(0);

  // METHODS ------------------------------------------------>

  const updateSound = (soundId, sequenceId) => {
    dispatch(
      soundActions.updateSound({
        id: sequenceId,
        soundId: soundId,
        array: soundArray[sequenceId],
      })
    );
  };

  const removeSound = (sequenceId) => {
    dispatch(soundActions.removeSound(sequenceId));
  };

  const play = () => {
    setIsPlaying(!isPlaying);
  };

  const stop = () => {
    setIsPlaying(false);
    setRowId((rowId = 0));
    setImpulse(0);
  };

  const reset = () => {
    dispatch(soundActions.resetSound(soundArray));
    stop();
  };

  const playAudio = () => {
    if (rowId === bars) {
      setRowId((rowId = 0));
    }

    setImpulse((impulse += 1));

    if (impulse % 6 === 0) {
      sequence.forEach((element) => {
        if (element.sounds[rowId].on === true) {
          new Audio(element.soundFile).play();
        }
      });

      setRowId(rowId++);
    }
  };

  useEffect(() => {
    let interval;

    if (isPlaying) {
      let value = 60000 / tempoValue / 24;

      interval = setInterval(() => {
        playAudio();
      }, value);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, tempoValue, sequence]);

  return {
    bars,
    isPlaying,
    tempoValue,
    rowId,
    impulse,
    sequence,
    play,
    stop,
    reset,
    playAudio,
    updateSound,
    removeSound,
  };
}

export default useLogic;
