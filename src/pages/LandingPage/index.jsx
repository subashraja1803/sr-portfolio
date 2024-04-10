import React from "react";
import styles from "./LandingPage.module.scss";
import Home from "../Home";
import NavBar from "../../molecules/NavBar";
import { Route, Routes } from "react-router-dom";
import Experience from "../Experience";
import Projects from "../Projects";
import About from "../About";

function LandingPage() {
  return (
    <>
      <div className={styles.landingPage}>
        <NavBar />
        <div className={styles.displayContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
