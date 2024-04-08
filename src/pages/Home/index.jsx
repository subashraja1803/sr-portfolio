import React from "react";
import styles from "./Home.module.scss";
import image from "../../assets/images/MVD02445.JPG";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.summary}>
        <div className={styles.imageContainer}>
          <img src={image} alt="Subash Raja" />
        </div>
        <div className={styles.intro}>
          <h2 data-text="Hi, This is Subash Raja">Hi, This is Subash Raja</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
