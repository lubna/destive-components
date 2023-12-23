import { ReactNode } from "react";

export type ButtonProps = {
  as: "button" | "a";
  children: ReactNode;
  theme?: "default" | "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  url?: string;
  onClick?: () => void;
  smaller?: boolean;
};
