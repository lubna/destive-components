export type IconName =
  | "bauble"
  | "bell"
  | "candy-cane"
  | "gift"
  | "santa"
  | "snowflake"
  | "star"
  | "tree";

export type IconFill =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "action";

export type IconProps = {
  asset: IconName;
  additionalClass?: string;
  size?: "small" | "medium" | "large";
  fill?: IconFill;
};
