import React from "react";
import Layout from "../../src/components/core/Layout";
import GetBlogPosts from "../../src/useCases/getBlogPosts";
import MarkdownGateway from "../../src/gateways/markdownGateway";
import BlogSection from "../../src/components/custom/BlogSection";
import { NextSeo } from "next-seo";

export default function Blog({ blogPosts }) {
  return (
    <>
      <NextSeo title="Blog" description="A blog by Wen Ting Wang." />
      <Layout>
        <BlogSection
          blogPosts={blogPosts}
          title={<h1 className="mb-8">All blog posts</h1>}
          minHeight="min-h-screen-90"
          cardHeadingLevel={2}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const markdownGateway = new MarkdownGateway({ contentDirectory: "content" });
  const getBlogPosts = new GetBlogPosts(markdownGateway);
  const blogPosts = getBlogPosts.execute();

  return { props: { blogPosts: blogPosts.blogPosts } };
}