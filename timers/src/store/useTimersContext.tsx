import { useContext } from "react";
import { TimersContext } from "./store-schema";

export const useTimersContext = () => {
  const timersCtx = useContext(TimersContext);

  if (!timersCtx) {
    throw new Error(
      "useTimersContext must be used within a TimersContextProvider"
    );
  }
  return timersCtx;
};
