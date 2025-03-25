import React from "react";
import { NextSeo } from "next-seo";
import Layout from "@/components/core/Layout";
import BlogSection from "@/components/custom/BlogSection";
import { getBlogPosts } from "@/utils/AppContext";

export default function Blog({ blogPosts }) {
  return (
    <>
      <NextSeo title="Blog" description="A blog by Wen Ting Wang." />
      <Layout>
        <BlogSection
          blogPosts={blogPosts}
          title={<h1 className="mb-8">All blog posts</h1>}
          minHeight="min-h-[90vh]"
          cardHeadingLevel={2}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const blogPosts = getBlogPosts.execute();

  return { props: { blogPosts: blogPosts.blogPosts } };
}
