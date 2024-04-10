import React, { useState } from "react";
import styles from "./Home.module.scss";
import image from "../../assets/images/SR_udupi.jpg";
import Typewriter from "typewriter-effect";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
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
            src={image}
            alt="Subash Raja"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className={styles.summary}>
          <div className={styles.intro}>
            <span>Subash Raja</span>
            {/* <div className={styles.inputCursor}></div> */}
          </div>
          <div className={styles.role}>
            <Typewriter
              options={{
                strings: ["A Software Developer in the making"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={styles.detail}>
            Dedicated, motivated and a self-driven engineer, with a passion for
            exploring new domains and a proven ability to adapt quickly.
            Experienced in Frontend Development with expertise in ReactJS and
            JavaScript.
          </div>
          <div className={styles.contactIcons}>
            {contactDetails.map(({ icon, link }) => (
              <a href={link} className={styles.contactIcon}>
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
