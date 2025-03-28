import { Action, TimersState } from "./store-schema";

export const timersReducer = (
  state: TimersState,
  action: Action
): TimersState => {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        isRunning: true,
      };
    case "STOP_TIMER":
      return {
        ...state,
        isRunning: false,
      };
    case "ADD_TIMER":
      return {
        ...state,
        timers: [
          ...state.timers,
          { name: action.payload.name, duration: action.payload.duration },
        ],
      };
    default:
      return state;
  }
};
