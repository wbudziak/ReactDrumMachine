import useLogic from "../../hooks/use-logic";

const Board = (props) => {
  const { sequence, isPlaying, rowId, updateSound, removeSound } = props;

  return (
    <>
      <div>
        {sequence.map((sequence, sequenceId) => (
          <div key={sequenceId}>
            <div>{sequence.soundName}</div>
            {sequence.sounds.map((sound, soundId) => (
              <button
                key={soundId}
                style={{
                  background:
                    (rowId === soundId && isPlaying && "lightgreen") ||
                    (sound.on && "green"),
                  width: "50px",
                  height: "25px",
                }}
                onClick={() => {
                  updateSound(soundId, sequenceId);
                }}
              ></button>
            ))}

            <button
              onClick={() => {
                removeSound(sequenceId);
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
