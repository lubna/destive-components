import React from "react";
import { GiftImageProps } from "./gift-image.type";
import BowSvg from "./assets/bow.svg";
import styles from "./gift-image.module.css";

export const GiftImage = ({
  src,
  bowTheme = "secondary",
  width = "auto",
  height = "auto",
}: GiftImageProps) => {
  return (
    <section>
      <div className={styles.container}>
        <BowSvg className={`${styles.bow} ${styles[bowTheme]}`} />
        <figure className={styles.figure}>
          <img className={styles.img} src={src} width={width} height={height} />
        </figure>
      </div>
    </section>
  );
};
