import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.circle}></div>
        <span>DevStudio</span>
      </div>
      <ul className={styles.links}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
