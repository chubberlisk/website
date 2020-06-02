import React from "react";
import Section from "../../core/Section";
import styles from "./index.module.css";

const ContactMeSection = () => (
  <Section
    id="contact-me"
    className={styles.contactMe}
    height="h-auto"
    backgroundColor="bg-wtw-turquoise"
  >
    <div className="container">
      <div>
        <img
          src="/icons/wtw-512x512.png"
          alt="Wen Ting Wang Logo"
          className={styles.contactMeLogo}
        />
      </div>
      <div className={styles.contactMeTitle}>
        <b>Wen Ting Wang</b>
      </div>
      <div className={styles.contactMeSlogan}>
        Let&apos;s develop Tings together.
      </div>
      <div className={styles.contactMeSocialLinks}>
        <ul className={styles.contactMeSocialLinksList}>
          <li className={styles.contactMeSocialLinksListItem}>
            <a
              href="https://github.com/chubberlisk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wen Ting Wang's GitHub Profile"
              className={styles.contactMeSocialLink}
            >
              GitHub
            </a>
          </li>
          <li className={styles.contactMeSocialLinksListItem}>
            <a
              href="https://www.linkedin.com/in/wen-ting-wang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Wen Ting Wang's LinkedIn Profile"
              className={styles.contactMeSocialLink}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

export default ContactMeSection;
