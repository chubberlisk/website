import React from "react";
import Layout from "../components/core/Layout";
import GetTingPosts from "../useCases/getTingPosts";
import MarkdownGateway from "../gateways/markdownGateway";
import TingsSection from "../components/custom/TingsSection";
import { NextSeo } from "next-seo";

export default function Tings({ tingPosts }) {
  return (
    <>
      <NextSeo
        title="Tings"
        description="A bunch of dumb Tings by Wen Ting Wang."
      />
      <Layout>
        <TingsSection
          tingPosts={tingPosts}
          title={<h1 className="mb-8">All Ting posts</h1>}
          minHeight="min-h-screen-90"
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const markdownGateway = new MarkdownGateway({ contentDirectory: "content" });
  const getTingPosts = new GetTingPosts(markdownGateway);
  const tingPosts = getTingPosts.execute();

  return { props: { tingPosts: tingPosts.tingPosts } };
}
