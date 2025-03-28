import { NewGoal, CourseGoal } from "./Schema";
import { ReactNode, type PropsWithChildren } from "react";

export type NewGoalsProps = {
  onAddGoal: ({ goal, summary }: NewGoal) => void;
};

export type CourseGoalListProps = {
  goals: CourseGoal[];
  onDelete: (id: number) => void;
};

// the PropsWithChildren generic takes as a type all other props required in the component
export type HeaderProps = PropsWithChildren<{
  image: { src: string; alt: string };
}>;

export type CourseGoalsProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

type HintBoxprops = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxprops = {
  mode: "warning";
  children: ReactNode;
  severity: "low" | "medium" | "high";
};

export type InfoBoxprops = HintBoxprops | WarningBoxprops;
