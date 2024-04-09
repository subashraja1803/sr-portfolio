import React from "react";
import styles from "./Title.module.scss";

function Title({ content, borderBottom = true }) {
  return (
    <div
      className={`${styles.title} ${borderBottom ? styles.borderBottom : ""}`}
    >
      {content}
    </div>
  );
}

export default Title;
