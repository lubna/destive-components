import { IconName } from "../icon/icon.type";

export type Tag = {
  label: string;
  theme?: "default" | "primary" | "secondary";
  icon?: IconName;
  outlined?: boolean;
};

export type TagsProps = {
  tags: Tag[];
};
