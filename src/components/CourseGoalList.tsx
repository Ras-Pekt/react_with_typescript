import CourseGoal from "./CourseGoal";
import { type CourseGoal as Goal } from "../App";

type CourseGoalListProps = {
  goals: Goal[];
  onDelete: (id: number) => void;
};

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
};

export default CourseGoalList;
