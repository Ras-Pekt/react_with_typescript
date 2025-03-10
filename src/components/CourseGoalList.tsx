import CourseGoal from "./CourseGoal";
import { CourseGoalListProps } from "../schema/Props";

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
