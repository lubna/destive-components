import { IconName } from "../icon/icon.type";

export type CardProps = {
  title: string;
  description: string;
  icon: IconName;
  iconBg?: "primary" | "secondary" | "accent";
  cta?: {
    label: string;
    url: string;
  };
};
