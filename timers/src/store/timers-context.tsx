import { PropsWithChildren, useReducer } from "react";
import { TimersContext, TimersContextValue, TimersState } from "./store-schema";
import { timersReducer } from "./timers-reducer";

const initialState: TimersState = {
  isRunning: false,
  timers: [],
};

export const TimersContextProvider = ({ children }: PropsWithChildren) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    isRunning: timersState.isRunning,
    timers: timersState.timers,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimers() {
      dispatch({ type: "START_TIMER" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMER" });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};
