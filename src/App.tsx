import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const newGoal: CourseGoal = {
    id: Math.random(),
    title: "Learn React with Typescript",
    description: "Learn it from the ground up!",
  };

  const addGoalHandler = () => {
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

      <button onClick={addGoalHandler}>Add Goal</button>

      <CourseGoalList goals={goals} onDelete={deleteGoalHandler} />
    </main>
  );
}

export default App;
