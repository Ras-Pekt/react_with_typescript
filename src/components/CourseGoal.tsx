import { CourseGoalsProps } from "../schema/Props";

const CourseGoal = ({ id, title, onDelete, children }: CourseGoalsProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
