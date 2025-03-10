import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import { CourseGoal, NewGoal as NGoal } from "./schema/Schema";

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoalHandler = ({ goal, summary }: NGoal) => {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  };

  const deleteGoalHandler = (id: number) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Learn React with Typescript" }}>
        <h1>Your Course Goals</h1>
      </Header>

      {/* <button onClick={addGoalHandler}>Add Goal</button> */}

      <NewGoal onAddGoal={addGoalHandler} />

      <CourseGoalList goals={goals} onDelete={deleteGoalHandler} />
    </main>
  );
}

export default App;
