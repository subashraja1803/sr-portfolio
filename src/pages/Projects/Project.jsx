import React from "react";
import styles from "./Projects.module.scss";
import { Tag } from "antd";
import { BsArrowUpRightSquare } from "react-icons/bs";

function Project({ details }) {
  const { title, description, tech, gitLink, deploymentURL, inDevelopment } =
    details;
  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {inDevelopment && <div className={styles.badge}>In Development</div>}
      </div>
      <p className={styles.description}>{description}</p>
      {tech?.length && (
        <div className={styles.technologies}>
          {tech.map((t) => (
            <Tag key={t} className={styles.tag}>
              {t}
            </Tag>
          ))}
        </div>
      )}
      <div className={styles.links}>
        {gitLink && (
          <div className={styles.link}>
            <a href={gitLink} target="_blank" rel="noreferrer">
              GitHub <BsArrowUpRightSquare />
            </a>
          </div>
        )}
        {deploymentURL && (
          <div className={styles.link}>
            <a href={deploymentURL} target="_blank" rel="noreferrer">
              Live Demo <BsArrowUpRightSquare />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;
