import React from "react";
import { NextSeo } from "next-seo";
import Layout from "@/components/core/Layout";
import PaintingsSection from "@/components/custom/PaintingsSection";
import paintings from "@/content/paintings";

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
              It focuses on a fairy called Tingker Bell among other Tings.
            </p>
          }
          minHeight="min-h-[90vh]"
          cardHeadingLevel={2}
          padding="pt-5 py-15"
        />
      </Layout>
    </>
  );
}
