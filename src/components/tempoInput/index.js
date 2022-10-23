import { useSelector, useDispatch } from "react-redux";
import { soundActions } from "../../store/sounds";

const TempoInput = () => {
  const dispatch = useDispatch();

  const tempo = useSelector((state) => state.sound.tempo);

  const setTempoHandler = (e) => {
    dispatch(soundActions.setTempo(e.target.value));
  };

  return (
    <div>
      <label>
        <input
          type={"number"}
          min={30}
          max={244}
          value={tempo}
          onChange={setTempoHandler}
        ></input>
        Tempo:{tempo}
      </label>
    </div>
  );
};

export default TempoInput;
