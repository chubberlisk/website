import React from "react";
import Layout from "@/components/core/Layout";
import GetWritings from "@/useCases/getWritings";
import MarkdownGateway from "@/gateways/markdownGateway";
import WritingsSection from "@/components/custom/WritingsSection";
import { NextSeo } from "next-seo";

export default function Index({ writings }) {
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
  const markdownGateway = new MarkdownGateway({ contentDirectory: "content" });
  const getWritings = new GetWritings(markdownGateway);
  const writings = getWritings.execute();

  return { props: { writings: writings.writings } };
}
