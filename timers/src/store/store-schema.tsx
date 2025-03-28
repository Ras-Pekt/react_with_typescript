import { createContext } from "react";

export type Timer = {
  name: string;
  duration: number;
};

export type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

export type TimersContextValue = TimersState & {
  addTimer: (timer: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

export const TimersContext = createContext<TimersContextValue | null>(null);

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};

type StartTimerAction = {
  type: "START_TIMER";
};

type StopTimerAction = {
  type: "STOP_TIMER";
};

export type Action = AddTimerAction | StartTimerAction | StopTimerAction;
