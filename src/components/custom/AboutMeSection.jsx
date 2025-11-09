import React from "react";
import Link from "next/link";
import Section from "@/components/core/Section";
import ExternalLink from "@/components/core/ExternalLink";
import Text from "@/components/core/Text";
import JavaScriptLogo from "@/components/core/icons/JavaScriptLogo";
import TerraformLogo from "@/components/core/icons/TerraformLogo";
import CSharpLogo from "@/components/core/icons/CSharpLogo";
import ReactLogo from "@/components/core/icons/ReactLogo";
import PostgresqlLogo from "@/components/core/icons/PostgresqlLogo";
import RubyLogo from "@/components/core/icons/RubyLogo";
import GitLogo from "@/components/core/icons/GitLogo";
import AwsLogo from "@/components/core/icons/AwsLogo";
import AzureLogo from "@/components/core/icons/AzureLogo";
import HerokuLogo from "@/components/core/icons/HerokuLogo";
import ServerlessFrameworkLogo from "@/components/core/icons/ServerlessFrameworkLogo";
import KotlinLogo from "@/components/core/icons/KotlinLogo";

export default function AboutMeSection() {
  return (
    <Section id="about-me">
      <h2>A bit about me</h2>

      <Text>
        <p>
          After accidentally discovering a passion for programming during
          A-Levels, I embarked on a journey to learn more about software
          engineering. I got a degree in Computer Science and eventually joined
          the{" "}
          <ExternalLink
            href="https://madetech.com/careers/academy"
            className="text-made-tech"
            ariaLabel="Made Tech Academy"
          >
            Made Tech Academy
          </ExternalLink>{" "}
          programme in 2019, where I learnt about things like Clean
          Architecture, test-driven development (TDD), etc.
        </p>

        <p>
          I became a software engineer at the company, building software that
          made our clients and users happy, using Agile practices and techniques
          such as continuous delivery, TDD and pair (or 🍐) programming. Oh, and
          I may or may not have had a phase where I made some{" "}
          <Link href="/paintings">&quot;paintings&quot;</Link> (emphasis on the
          &quot;pain&quot; and &quot;ting&quot;) using Microsoft Paint.
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
          <KotlinLogo />
          <span>Kotlin</span>
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
