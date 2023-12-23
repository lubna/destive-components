import React from "react";
import { Icon } from "../icon/icon";

import { BulletListProps } from "./bullet-list.type";
import styles from "./bullet-list.module.css";

export const BulletList = ({
  items,
  marker = "default",
  markerFill = "default",
}: BulletListProps) => {
  return (
    <ul role="list" className={styles.list}>
      {items.map((item) => {
        if (marker !== "default") {
          return (
            <li className={styles["custom-marker"]}>
              <Icon asset={marker} fill={markerFill} size={"small"} />
              {item}
            </li>
          );
        } else {
          return (
            <li className={`${styles.item} ${styles[markerFill]}`}>{item}</li>
          );
        }
      })}
    </ul>
  );
};
