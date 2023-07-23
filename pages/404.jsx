import React from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Layout from "@/components/core/Layout";
import Section from "@/components/core/Section";

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Page not found"
        description="Page not found"
        noindex={true}
        nofollow={true}
      />
      <Layout>
        <Section minHeight="min-h-screen-90">
          <div className="container">
            <h1>😞 Page not found</h1>
            <p>
              Eh, sorry lah! I can&apos;t seem to find what you&apos;re looking
              for.
            </p>
            <p>
              Try heading back to the <Link href="/">homepage</Link>, that
              should exist.
            </p>
          </div>
        </Section>
      </Layout>
    </>
  );
}
