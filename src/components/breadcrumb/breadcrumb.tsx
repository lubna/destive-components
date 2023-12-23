import React from "react";
import { BreadcrumbProps } from "./breadcrumb.type";
import styles from "./breadcrumb.module.css";

export const Breadcrumb = ({
  links,
}: BreadcrumbProps) => {
  return (
    <nav>
      {links.map((link) => (
        <span className={styles.breadcrumb}>
          {!!link.url ? (
            <a href={link.url}>{link.label}</a>
          ) : (
            link.label
          )}
        </span>
      ))}
    </nav>
  );
};
