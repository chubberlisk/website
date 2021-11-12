import React from "react";
import Section from "../../core/Section";
import styles from "./index.module.css";
import Image from "next/image";

const AboutMeSection = () => (
  <Section
    id="about-me"
    className={styles.aboutMe}
    height="h-auto"
    backgroundColor="bg-blue-700"
  >
    <div className="container">
      <h2>A bit about me</h2>
      <p>
        I’m a software engineer at{" "}
        <a
          href="https://madetech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300"
        >
          Made Tech
        </a>
        , after graduating from the{" "}
        <a
          href="https://madetech.com/careers/academy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300"
        >
          Academy
        </a>{" "}
        programme in 2019. I build software that makes our customers happy,
        using Agile practices and techniques such as continuous delivery,
        test-driven development and pair programming.
      </p>
    </div>
  </Section>
);

export default AboutMeSection;
