import React from "react";
import styles from "./Projects.module.scss";
import { Tag } from "antd";
import { BsArrowUpRightSquare } from "react-icons/bs";

function Project({ details }) {
  const { title, description, tech, gitLink, deploymentURL, inDevelopment } =
    details;
  return (
    <div className={styles.project}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {tech?.length && (
        <div className={styles.technologies}>
          {tech.map((t) => (
            <Tag color="#033599c1" className={styles.tag}>
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
              Check it out <BsArrowUpRightSquare />
            </a>
          </div>
        )}
        {inDevelopment && (
          <div className={styles.inDevelopment}>In Development</div>
        )}
      </div>
    </div>
  );
}

export default Project;
