import { useTimersContext } from "../store/useTimersContext";
import Timer from "./Timer";

const Timers = () => {
  const { timers } = useTimersContext();
  return (
    <>
      <h2>Timers</h2>
      <ul>
        {timers.map((timer, index) => (
          <li key={index}>
            <Timer {...timer} />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Timers;
