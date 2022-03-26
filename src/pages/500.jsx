import React from "react";
import Layout from "../components/core/Layout";
import Section from "../components/core/Section";
import ExternalLink from "../components/core/ExternalLink";

export default function Custom500() {
  return (
    <Layout title="Internal server error">
      <Section minHeight="min-h-screen-90">
        <div className="container">
          <h1>🔥 Internal server error</h1>
          <p>Eh, sorry lah! Something has seriously gone wrong.</p>
          <p>
            Try refreshing this page or please{" "}
            <ExternalLink
              href="https://github.com/chubberlisk/website/issues/new"
              aria-label="Create a GitHub issues for Wen Ting Wang's website"
            >
              create an issue on my GitHub repository
            </ExternalLink>{" "}
            if this issue persists.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
