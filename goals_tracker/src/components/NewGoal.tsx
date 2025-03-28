import { useRef, type FormEvent } from "react";
import { NewGoalsProps } from "../schema/Props";

const NewGoal = ({ onAddGoal }: NewGoalsProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const goal = goalRef.current!.value;
    const summary = summaryRef.current!.value;

    // TODO: Add better validation
    if (goal && summary) {
      event.currentTarget.reset();
      onAddGoal({ goal, summary });
    } else {
      alert("Please enter both a goal and a summary.");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summaryRef} />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
