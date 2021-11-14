import React from "react";
import Section from "../../core/Section";

const AboutMeSection = () => (
  <Section id="about-me">
    <div className="container">
      <h2>A bit about me</h2>

      <p>
        After accidentally discovering a passion for programming during
        A-Levels, I embarked on a journey to learn more software engineering -
        getting a degree in Computer Science and eventually applying to the{" "}
        <a
          href="https://madetech.com/careers/academy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-made-tech"
        >
          Made Tech Academy
        </a>{" "}
        programme in 2019 where I learnt about things like Clean Architecture,
        test-driven development (TDD), etc.
      </p>

      <p>
        Now I&apos;m a Software Engineer 2 at the company, building software
        that makes our clients and users happy, using Agile practices and
        techniques such as continuous delivery, TDD and pair (or 🍐)
        programming.
      </p>

      <p>Technologies I&apos;m currently working with:</p>

      <div className="grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-4">
        <div>👩‍💻 TypeScript</div>
        <div>👩‍💻 C# .NET</div>
        <div>👩‍💻 Terraform</div>
        <div>👩‍💻 React</div>
        <div>👩‍💻 Serverless</div>
        <div>👩‍💻 PostgreSQL</div>
      </div>
    </div>
  </Section>
);

export default AboutMeSection;
