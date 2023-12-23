import { IconName, IconFill } from "../icon/icon.type";

export type BulletListProps = {
  items: string[];
  marker?: "default" | IconName;
  markerFill?: IconFill;
};
