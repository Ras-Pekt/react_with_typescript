import { useTimersContext } from "../store/useTimersContext";
import Button from "./UI/Button";

const Header = () => {
  const { isRunning, startTimers, stopTimers } = useTimersContext();
  return (
    <header>
      <h1>React Timer</h1>
      <Button onClick={isRunning ? stopTimers : startTimers}>
        {isRunning ? "Stop" : "Start"} Timers
      </Button>
    </header>
  );
};
export default Header;
