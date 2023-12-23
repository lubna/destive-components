import React from "react";
import { ButtonProps } from "./button.type";
import styles from "./button.module.css";

export const Button = ({
  as,
  children,
  type = "button",
  url,
  onClick,
  theme = "default",
  smaller = false,
}: ButtonProps) => {
  const classNameList = `${styles.button} ${styles[theme]} ${
    smaller && styles.small
  }`;

  if (as === "a" && !!url) {
    return (
      <a className={classNameList} href={url}>
        {children}
      </a>
    );
  } else if (as === "button" && onClick) {
    return (
      <button className={classNameList} type={type} onClick={onClick}>
        {children}
      </button>
    );
  } else {
    return null;
  }
};
