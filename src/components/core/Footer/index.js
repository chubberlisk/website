import React from "react";
import styles from "./index.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.copyrightText}>
        © {new Date().getFullYear()} Copyright: Wen Ting Wang
      </div>
    </div>
  </footer>
);

export default Footer;
