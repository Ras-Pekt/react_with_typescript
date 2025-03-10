import { NewGoal, CourseGoal } from "./Schema";
import { type PropsWithChildren } from "react";

export type NewGoalsProps = {
  onAddGoal: ({ goal, summary }: NewGoal) => void;
};

export type CourseGoalListProps = {
  goals: CourseGoal[];
  onDelete: (id: number) => void;
};

export type HeaderProps = PropsWithChildren<{
  image: { src: string; alt: string };
}>;

// the PropsWithChildren generic takes as a type all other props required in the component
export type CourseGoalsProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;
