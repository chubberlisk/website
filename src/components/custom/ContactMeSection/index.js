import React from "react";
import Section from "../../core/Section";
import Image from "next/image";
import classNames from "classnames";

const ContactMeSection = () => (
  <Section id="contact-me" height="h-auto">
    <div className="container">
      <div className="mt-1 mb-5">
        <Image
          src="/images/icons/icon-512x512.png"
          alt="Wen Ting Wang Logo"
          width={72}
          height={72}
        />
      </div>

      <h2
        className={classNames("text-2xl", "textGradient", "font-black", "mb-1")}
      >
        Wen Ting Wang
      </h2>

      <p className={classNames("text-xl", "text-gray-100")}>
        Let&apos;s develop Tings together.
      </p>

      <div className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-1">
        <a
          href="https://github.com/chubberlisk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Wen Ting Wang's GitHub Profile"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/wen-ting-wang"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Wen Ting Wang's LinkedIn Profile"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </Section>
);

export default ContactMeSection;
