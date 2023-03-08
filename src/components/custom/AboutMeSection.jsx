import React from "react";
import Link from "next/link";
import Section from "../core/Section";
import ExternalLink from "../core/ExternalLink";
import Text from "../core/Text";
import JavaScriptLogo from "../core/icons/JavaScriptLogo";
import TerraformLogo from "../core/icons/TerraformLogo";
import CSharpLogo from "../core/icons/CSharpLogo";
import ReactLogo from "../core/icons/ReactLogo";
import PostgresqlLogo from "../core/icons/PostgresqlLogo";
import RubyLogo from "../core/icons/RubyLogo";
import GitLogo from "../core/icons/GitLogo";
import AwsLogo from "../core/icons/AwsLogo";
import AzureLogo from "../core/icons/AzureLogo";
import HerokuLogo from "../core/icons/HerokuLogo";
import ServerlessFrameworkLogo from "../core/icons/ServerlessFrameworkLogo";
import TypeScriptLogo from "../core/icons/TypeScriptLogo";

export default function AboutMeSection() {
  return (
    <Section id="about-me">
      <h2>A bit about me</h2>

      <Text>
        <p>
          After accidentally discovering a passion for programming during
          A-Levels, I embarked on a journey to learn more about software
          engineering - getting a degree in Computer Science and eventually
          joining the{" "}
          <ExternalLink
            href="https://madetech.com/careers/academy"
            className="text-made-tech"
            ariaLabel="Made Tech Academy"
          >
            Made Tech Academy
          </ExternalLink>{" "}
          programme in 2019 where I learnt about things like Clean Architecture,
          test-driven development (TDD), etc.
        </p>

        <p>
          Now I&apos;m a{" "}
          <ExternalLink
            href="https://github.com/madetech/handbook/blob/main/roles/mid_software_engineer.md"
            className="text-made-tech"
            ariaLabel="Made Tech Role Guidance: Software Engineer"
          >
            Software Engineer
          </ExternalLink>{" "}
          at the company, building software that makes our clients and users
          happy, using a silly sense of humour and Agile practices and
          techniques such as continuous delivery, TDD and pair (or 🍐)
          programming. Oh, and I may or may not have had a phase where I made
          some <Link href="/paintings">&quot;paintings&quot;</Link> (emphasis on
          the &quot;pain&quot; and &quot;ting&quot;) using Microsoft Paint.
          It&apos;s related to creating amazing software, I promise!
        </p>
        <p>
          Anyway, I see myself as a generalist - some technologies I&apos;ve
          worked with include:
        </p>
      </Text>

      <div className="grid grid-rows-6 lg:grid-rows-3 grid-flow-col gap-3">
        <div className="flex justify-start items-center">
          <GitLogo />
          <span>Git</span>
        </div>

        <div className="flex justify-start items-center">
          <RubyLogo />
          <span>Ruby</span>
        </div>

        <div className="flex justify-start items-center">
          <CSharpLogo />
          <span>C# .NET</span>
        </div>

        <div className="flex justify-start items-center">
          <JavaScriptLogo />
          <span>JavaScript</span>
        </div>

        <div className="flex justify-start items-center">
          <TypeScriptLogo />
          <span>TypeScript</span>
        </div>

        <div className="flex justify-start items-center">
          <TerraformLogo />
          <span>Terraform</span>
        </div>

        <div className="flex justify-start items-center">
          <ReactLogo />
          <span>React</span>
        </div>

        <div className="flex justify-start items-center">
          <PostgresqlLogo />
          <span>PostgreSQL</span>
        </div>

        <div className="flex justify-start items-center">
          <AwsLogo />
          <span>AWS</span>
        </div>

        <div className="flex justify-start items-center">
          <AzureLogo />
          <span>Azure</span>
        </div>

        <div className="flex justify-start items-center">
          <HerokuLogo />
          <span>Heroku</span>
        </div>

        <div className="flex justify-start items-center">
          <ServerlessFrameworkLogo />
          <span>Serverless Framework</span>
        </div>
      </div>
    </Section>
  );
}
