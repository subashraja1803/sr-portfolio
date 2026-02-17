import React, { useState } from "react";
import styles from "./Home.module.scss";
import SR_img from "../../assets/images/SR_Coorg_1.jpg";
import Typewriter from "typewriter-effect";
import { contactDetails } from "./ContactDetails";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className={styles.home}>
      <div className={styles.profile}>
        <div className={styles.imageContainer}>
          <img
            className={styles.profileImage}
            style={imageLoaded ? { opacity: 1 } : { opacity: 0 }}
            src={SR_img}
            alt="Subash Raja"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className={styles.summary}>
          <div className={styles.intro}>Subash Raja</div>
          <div className={styles.role}>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Problem Solver",
                  "Tech Enthusiast",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <div className={styles.detail}>
            Full-Stack Software Engineer with 4+ years of experience delivering
            scalable and high-performance web applications. Specialized in
            ReactJS, Node, JavaScript and modern web frameworks with expertise
            in full-stack development, UI/UX optimization, and performance
            engineering. Dedicated to writing clean, maintainable code and
            building scalable applications that make an impact.
          </div>
          <div className={styles.cta}>
            <a
              href="/projects"
              className={`${styles.ctaButton} ${styles.primary}`}
            >
              View My Work
            </a>
            <a
              href="#/experience"
              className={`${styles.ctaButton} ${styles.secondary}`}
            >
              My Experience
            </a>
            <a
              href="mailto:subashraja2001@gmail.com"
              className={`${styles.ctaButton} ${styles.tertiary}`}
            >
              Get In Touch
            </a>
          </div>
          <div className={styles.contactIcons}>
            {contactDetails.map(({ icon, link }) => (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className={styles.contactIcon}
                title={link}
                key={link}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
