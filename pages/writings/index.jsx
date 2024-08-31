import React from "react";
import { NextSeo } from "next-seo";
import Layout from "@/components/core/Layout";
import WritingsSection from "@/components/custom/WritingsSection";
import { getWritings } from "@/utils/AppContext";

export default function Writings({ writings }) {
  return (
    <>
      <NextSeo
        title="Writings"
        description="A bunch of dumb written things by Wen Ting Wang."
      />
      <Layout>
        <WritingsSection
          writings={writings}
          title={<h1 className="mb-8">Writings</h1>}
          minHeight="min-h-screen-90"
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const writings = getWritings.execute();

  return { props: { writings: writings.writings } };
}
