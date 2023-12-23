import React from "react";
import { Icon } from "../icon/icon";

import { CardProps } from "./card.type";
import styles from "./card.module.css";

export const Card = ({
  title,
  description,
  icon,
  iconBg = "primary",
  cta,
}: CardProps) => {
  return (
    <article className={styles.article}>
      <figure
        className={`${styles["icon-container"]} ${styles[iconBg]}`}
      >
        <Icon
          asset={icon}
          additionalClass={styles.icon}
          size="large"
        />
      </figure>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {cta && <a href={cta.url}>{cta.label}</a>}
      </div>
    </article>
  );
};
