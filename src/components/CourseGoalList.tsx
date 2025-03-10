import CourseGoal from "./CourseGoal";
import { CourseGoalListProps } from "../schema/Props";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  let infoBoxComponent: ReactNode;

  if (goals.length === 0) {
    infoBoxComponent = (
      <InfoBox mode="hint">No goals found. Maybe add one?</InfoBox>
    );
  }

  if (goals.length >= 4) {
    infoBoxComponent = (
      <InfoBox mode="warning" severity="high">
        You've taken on too many goals. Pace yourself!
      </InfoBox>
    );
  }

  return (
    <>
      {infoBoxComponent}
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
    </>
  );
};

export default CourseGoalList;
