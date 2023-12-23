import React from "react";
import { Icon } from "../icon/icon";

import { TagsProps } from "./tags.type";
import styles from "./tags.module.css";

export const Tags = ({ tags }: TagsProps) => {
  return (
    <ul className={styles.container}>
      {tags.map((tag) => (
        <li
          className={`${styles.tag} ${
            tag.outlined && styles.outlined
          } ${
            !!tag.theme &&
            tag.theme !== "default" &&
            styles[tag.theme]
          }`}
        >
          {tag.icon && (
            <Icon
              asset={tag.icon}
              additionalClass={styles.icon}
            />
          )}
          {tag.label}
        </li>
      ))}
    </ul>
  );
};
