import React from "react";
import Layout from "../components/core/Layout";
import PaintingsSection from "../components/custom/PaintingsSection";
import paintings from "../../content/paintings";

export default function Paintings() {
  return (
    <Layout>
      <PaintingsSection
        paintings={paintings}
        title={<h1>Paintings</h1>}
        description={
          <p className="mb-5">
            These are a poor attempt at making comics using Microsoft Paint. It
            focuses on a fairy called Tingker Bell among other Tings. Find them
            on{" "}
            <a
              href="https://www.webtoons.com/en/challenge/i-am-tingker-bell/list?title_no=578845"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="I am Tingker Bell on Webtoons"
            >
              Webtoons
            </a>
            {", "}
            <a
              href="https://www.instagram.com/chubbertiste/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chubbertiste's Instagram"
            >
              Instagram
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/chubbertiste"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chubbertiste's Twitter"
            >
              Twitter
            </a>{" "}
            as well.
          </p>
        }
        minHeight="min-h-screen-90"
      />
    </Layout>
  );
}
