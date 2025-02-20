// import { ReactNode } from "react";
import { type PropsWithChildren } from "react";

/** 
type CourseGoalsProps = {
  title: string;
  children: ReactNode;
};
*/

// the PropsWithChildren generic takes as a type all other props required in the component
type CourseGoalsProps = PropsWithChildren<{ title: string }>;

const CourseGoals = ({ title, children }: CourseGoalsProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
        <button>Delete</button>
      </div>
    </article>
  );
};

export default CourseGoals;
