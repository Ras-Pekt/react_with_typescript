// import { ReactNode } from "react";
import { type PropsWithChildren } from "react";

// the PropsWithChildren generic takes as a type all other props required in the component
type CourseGoalsProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

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
