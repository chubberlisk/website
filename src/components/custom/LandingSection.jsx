import React from "react";
import Section from "../core/Section";
import ExternalLink from "../core/ExternalLink";

export default function LandingSection() {
  return (
    <Section id="landing" minHeight="min-h-screen-90">
      <h1 className="text-xl md:text-3xl leading-normal mb-3">Hi there! 👋</h1>
      <h2 className="text-4xl md:text-7xl leading-normal mb-9 md:w-3/4">
        My name is{" "}
        <span className="textGradient font-medium">Wen Ting Wang</span>, but
        just call me <span className="textGradient font-medium">Ting</span>.
      </h2>
      <p className="md:w-2/4">
        I&apos;m a software engineer based in London, UK. Currently, I&apos;m
        working at{" "}
        <ExternalLink
          href="https://madetech.com"
          className="text-made-tech"
          ariaLabel="Made Tech"
        >
          Made Tech
        </ExternalLink>{" "}
        helping to build services for the public sector and making Ting puns.
      </p>
    </Section>
  );
}
