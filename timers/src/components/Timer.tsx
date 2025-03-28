import Container from "./UI/Container";
import { Timer as TimersProps } from "../store/store-schema";
import { useEffect, useRef, useState } from "react";
import { useTimersContext } from "../store/useTimersContext";
const Timer = ({ name, duration }: TimersProps) => {
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimersContext();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(
        () =>
          setRemainingTime((prevTime) => {
            if (prevTime <= 0) {
              return 0;
            }
            return prevTime - 50;
          }),
        50
      );
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress value={remainingTime} max={duration * 1000} />
      </p>
      <p>{(remainingTime / 1000).toFixed(2)}</p>
    </Container>
  );
};
export default Timer;
