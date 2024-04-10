import React from "react";
import styles from "./Title.module.scss";

function Title({ content, borderBottom = true, className = "" }) {
  return (
    <div
      className={`${styles.title} ${
        borderBottom ? styles.borderBottom : ""
      } ${className}`}
    >
      {content}
    </div>
  );
}

export default Title;
