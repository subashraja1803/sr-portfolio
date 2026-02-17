import React from "react";
import styles from "./Footer.module.scss";
import { contactDetails } from "../../pages/Home/ContactDetails";

function Footer() {
  const currentYear = new Date().getFullYear();

  const isHomePage =
    window.location.pathname === "/" || window.location.pathname === "";

  return (
    <footer className={styles.footer}>
      {!isHomePage && (
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Subash Raja</h3>
            <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/experience">Experience</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/about">Skills</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Connect</h4>
            <div className={styles.socialLinks}>
              {contactDetails.map(({ icon, link, name }) => (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                  title={name}
                  key={name}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {!isHomePage && <div className={styles.divider}></div>}

      <div className={styles.bottom}>
        <p>&copy; {currentYear} Subash Raja. All rights reserved.</p>
        <p>
          Designed & Crafted with <span className={styles.heart}>♥</span> by
          Subash Raja
        </p>
      </div>
    </footer>
  );
}

export default Footer;
