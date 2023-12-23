import React from "react";
import { Button } from "../button/button";

import { HeroProps } from "./hero.type";
import styles from "./hero.module.css";

export const Hero = ({
  title,
  backgroundImage,
  textTheme,
  text,
  cta,
  textPosition = "center",
  darkOverlay = false,
}: HeroProps) => {
  return (
    <section
      className={`${styles.hero} ${styles[textTheme]} ${
        styles[textPosition]
      } ${darkOverlay && styles.overlay}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {!!text && <p className={styles.text}>{text}</p>}
        {cta && (
          <Button
            as="a"
            url={cta.url}
            smaller
            theme={
              textTheme === "light" ? "default" : "primary"
            }
          >
            {cta.label}
          </Button>
        )}
      </div>
    </section>
  );
};
