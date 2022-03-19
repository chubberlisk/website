import React from "react";
import Layout from "../components/core/Layout";
import Section from "../components/core/Section";

export default function Custom500() {
  return (
    <Layout title="Internal server error | Wen Ting Wang">
      <Section minHeight="min-h-screen-90">
        <div className="container">
          <h1>🔥 Internal server error</h1>
          <p>Eh, sorry lah! Something has seriously gone wrong.</p>
          <p>
            Try refreshing this page or please{" "}
            <a
              href="https://github.com/chubberlisk/website/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Create a GitHub issues for Wen Ting Wang's website"
            >
              create an issue on my GitHub repository
            </a>{" "}
            if this issue persists.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
