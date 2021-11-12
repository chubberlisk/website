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
      <Image
        src="/images/paintings/tingker-bell.png"
        alt="Tingker Bell"
        className="float-right ml-4 my-2 h-24"
        width="100"
        height="100"
      />
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
        test-driven development and pair programming. More recently though, I’ve
        been using Microsoft Paint and Photos to bring a little silliness into
        the workplace. Check out my{" "}
        <a
          href="https://github.com/chubberlisk/paintings"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300"
        >
          GitHub repository of paintings
        </a>
        .
      </p>
    </div>
  </Section>
);

export default AboutMeSection;
