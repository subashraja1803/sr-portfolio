import React from "react";
import styles from "./LandingPage.module.scss";
import Home from "../Home";
import NavBar from "../../molecules/NavBar";
import { Route, Routes } from "react-router-dom";

function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <NavBar />
      <div className={styles.displayContent}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default LandingPage;
