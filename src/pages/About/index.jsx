import React from "react";
import { Tag } from "antd";
import styles from "./About.module.scss";
import Title from "../../molecules/Title";
import { skills } from "./skills";

function About() {
  const {
    languages = [],
    frameworks = [],
    database = [],
    others = [],
  } = skills;
  return (
    <div className={styles.aboutPage}>
      <div className={styles.skillsSection}>
        <Title content="Technical Skills" />
        <div className={styles.skills}>
          <div className={styles.languages}>
            <Title
              content="Languages"
              className={styles.subHeader}
              borderBottom={false}
            />
            <div className={styles.languagesList}>
              {languages.map((lang) => (
                <Tag className={styles.tag} color="magenta">
                  {lang}
                </Tag>
              ))}
            </div>
          </div>
          <div className={styles.frameworks}>
            <Title
              content="Frameworks"
              className={styles.subHeader}
              borderBottom={false}
            />
            <div className={styles.frameworksList}>
              {frameworks.map((fw) => (
                <Tag className={styles.tag} color="cyan">
                  {fw}
                </Tag>
              ))}
            </div>
          </div>
          <div className={styles.databases}>
            <Title
              content="Databases"
              className={styles.subHeader}
              borderBottom={false}
            />
            <div className={styles.databasesList}>
              {database.map((db) => (
                <Tag className={styles.tag} color="volcano">
                  {db}
                </Tag>
              ))}
            </div>
          </div>
          <div className={styles.others}>
            <Title
              content="Others"
              className={styles.subHeader}
              borderBottom={false}
            />
            <div className={styles.othersList}>
              {others.map((other) => (
                <Tag className={styles.tag} color="geekblue">
                  {other}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
