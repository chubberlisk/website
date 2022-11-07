import React from "react";
import { NextSeo } from "next-seo";
import Layout from "../components/core/Layout";
import PaintingsSection from "../components/custom/PaintingsSection";
import ExternalLink from "../components/core/ExternalLink";
import paintings from "../../content/paintings";

export default function Paintings() {
  return (
    <>
      <NextSeo
        title="Paintings"
        description="A poor attempt at making comics using Microsoft Paint by Wen Ting Wang. It
            focuses on a fairy called Tingker Bell among other Tings."
      />
      <Layout>
        <PaintingsSection
          paintings={paintings}
          title={<h1>Paintings</h1>}
          description={
            <p>
              These are a poor attempt at making comics using Microsoft Paint.
              It focuses on a fairy called Tingker Bell among other Tings. Find
              them on{" "}
              <ExternalLink
                href="https://www.webtoons.com/en/challenge/i-am-tingker-bell/list?title_no=578845"
                aria-label="I am Tingker Bell on Webtoons"
              >
                Webtoons
              </ExternalLink>
              {", "}
              <ExternalLink
                href="https://www.instagram.com/chubbertiste/"
                aria-label="Chubbertiste's Instagram"
              >
                Instagram
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink
                href="https://twitter.com/chubbertiste"
                aria-label="Chubbertiste's Twitter"
              >
                Twitter
              </ExternalLink>{" "}
              as well.
            </p>
          }
          minHeight="min-h-screen-90"
          cardHeadingLevel={2}
          padding="py-6 xs:pb-8 xs:pt-0"
        />
      </Layout>
    </>
  );
}
