import React from "react";
import Layout from "../components/core/Layout";
import Section from "../components/core/Section";

export default function Custom404() {
  return (
    <Layout title="Page not found | Wen Ting Wang">
      <Section id="about-me">
        <div className="container">
          <h1>Page not found</h1>
          <p>Eh, sorry lah!</p>
          <p>I can&apos;t seem to find what you&apos;re looking for.</p>
          <p>
            Try heading back to the{" "}
            <a href="/" className="text-blue-900">
              homepage
            </a>
            , that should exist.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
