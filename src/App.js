import useLogic from "./hooks/use-logic";
import TempoInput from "./components/tempoInput";
import Button from "./components/button";
import Board from "./components/board";
import AddSound from "./components/addSound";

const Home = () => {
  const {
    sequence,
    isPlaying,
    rowId,
    play,
    stop,
    reset,
    updateSound,
    removeSound,
  } = useLogic();

  return (
    <>
      <div>
        <Board
          sequence={sequence}
          isPlaying={isPlaying}
          rowId={rowId}
          updateSound={updateSound}
          removeSound={removeSound}
        />
        <Button onClick={stop}>Stop</Button>
        <Button onClick={play}>{!isPlaying ? "play" : "pause"}</Button>
        <Button onClick={reset}>Reset</Button>
        <TempoInput />
        <AddSound />
      </div>
    </>
  );
};

export default Home;
