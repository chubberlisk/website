import React from "react";
import classNames from "classnames";
import Section from "../core/Section";

export default function LandingSection() {
  return (
    <Section id="landing" minHeight="min-h-screen-90">
      <div className={classNames("container")}>
        <h1 className="text-xl md:text-3xl leading-normal mb-3">
          Hi there! 👋
        </h1>
        <h2 className="text-4xl md:text-7xl leading-normal mb-9 md:w-3/4">
          My name is{" "}
          <span className={classNames("textGradient", "font-black")}>
            Wen Ting Wang
          </span>
          , but just call me{" "}
          <span className={classNames("textGradient", "font-black")}>Ting</span>
          .
        </h2>
        <p className="md:w-2/4">
          I&apos;m a software engineer based in London, UK. Currently, I&apos;m
          working at{" "}
          <a
            href="https://madetech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-made-tech"
          >
            Made Tech
          </a>{" "}
          helping to build services for the public sector and making Ting puns.
        </p>
      </div>
    </Section>
  );
}
