import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & ComponentPropsWithoutRef<"button">;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};
export default Button;
