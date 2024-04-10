import React from "react";
import styles from "./Projects.module.scss";
import Title from "../../molecules/Title";
import { projectDetails } from "./projectDetails";
import Project from "./Project";

function Projects() {
  return (
    <div className={styles.projectPage}>
      <Title content="Projects" />
      <div className={styles.projectsContainer}>
        {projectDetails.map((projectDetail) => (
          <Project details={projectDetail} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
