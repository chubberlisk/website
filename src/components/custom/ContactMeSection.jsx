import React from "react";
import Section from "../core/Section";
import Logo from "../core/Logo";
import ExternalLink from "../core/ExternalLink";

export default function ContactMeSection() {
  return (
    <Section id="contact-me" minHeight="h-auto" padding="py-6">
      <div className="mt-1 mb-5">
        <Logo height="72px" width="72px" />
      </div>

      <h2 className="text-2xl textGradient font-medium mb-1">Wen Ting Wang</h2>

      <p className="text-xl text-gray-100">
        Let&apos;s develop Tings together.
      </p>

      <div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-1">
        <ExternalLink
          href="https://github.com/chubberlisk"
          className="text-wtw-white"
          ariaLabel="Wen Ting Wang's GitHub Profile"
        >
          GitHub
        </ExternalLink>

        <ExternalLink
          href="https://www.linkedin.com/in/wen-ting-wang"
          className="text-wtw-white"
          ariaLabel="Wen Ting Wang's LinkedIn Profile"
        >
          LinkedIn
        </ExternalLink>
      </div>
    </Section>
  );
}
