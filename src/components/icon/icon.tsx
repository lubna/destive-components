import React, { lazy, Suspense } from "react";
import { IconProps } from "./icon.type";
import fillStyles from "./fill.module.css";
import styles from "./icon.module.css";

const loadIcon = (asset: string) =>
  lazy(() => import(`./assets/${asset}.svg`));

export const Icon = ({
  asset,
  size = "medium",
  fill = "default",
  additionalClass = "",
}: IconProps) => {
  const SvgIcon = loadIcon(asset);

  const styleClasses = `${styles[size]} ${fillStyles[fill]}`;

  return (
    <Suspense
      fallback={
        <div
          className={`${styles.loading} ${styleClasses} ${additionalClass}`}
        />
      }
    >
      <SvgIcon
        className={[
          styles.icon,
          styleClasses,
          additionalClass,
        ].join(" ")}
      />
    </Suspense>
  );
};
