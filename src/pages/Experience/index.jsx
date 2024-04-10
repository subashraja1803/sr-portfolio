import React from "react";
import styles from "./Experience.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { educationDetails, experienceDetails } from "./ExperienceDetails";
import { FaBriefcase } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import Title from "../../molecules/Title";
import { FaBook } from "react-icons/fa6";

function Experience() {
  return (
    <div className={styles.experiencePage}>
      <div className={styles.experienceContainer}>
        <Title content="Experience" />
        <VerticalTimeline>
          {experienceDetails.map(
            ({ role, timePeriod, company, location, description }) => (
              <VerticalTimelineElement date={timePeriod} icon={<FaBriefcase />}>
                <div className={styles.timelineElement}>
                  <h3 className="vertical-timeline-element--title">{role}</h3>
                  <h2 className="vertical-timeline-element--subtitle">{`${company} | ${location}`}</h2>
                  {description.map((desc) => (
                    <p
                      style={{
                        display: "grid",
                        gap: "1rem",
                        gridTemplateColumns: "1fr 20fr",
                      }}
                    >
                      <FcCheckmark style={{ fontSize: "1.5rem" }} /> {desc}
                    </p>
                  ))}
                </div>
              </VerticalTimelineElement>
            )
          )}
        </VerticalTimeline>
      </div>
      <div className={styles.educationContainer}>
        <Title content="Education" />
        <VerticalTimeline>
          {educationDetails.map(
            ({ courseName, year, department, institution, customIcon }) => (
              <VerticalTimelineElement
                date={year}
                icon={customIcon ? customIcon : <FaBook />}
              >
                <div className={styles.timelineElement}>
                  <h3 className="vertical-timeline-element--title">
                    {courseName}
                  </h3>
                  <h2 className="vertical-timeline-element--subtitle">
                    {department}
                  </h2>
                  <h2 className="vertical-timeline-element--subtitle">
                    {institution}
                  </h2>
                </div>
              </VerticalTimelineElement>
            )
          )}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
