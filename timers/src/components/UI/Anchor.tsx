import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type AnchorProps = PropsWithChildren & ComponentPropsWithoutRef<"a">;

const Anchor = ({ children, ...props }: AnchorProps) => {
  return <a {...props}>{children}</a>;
};
export default Anchor;
