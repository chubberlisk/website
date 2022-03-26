import React from "react";
import Layout from "../../components/core/Layout";
import GetBlogPosts from "../../useCases/getBlogPosts";
import MarkdownGateway from "../../gateways/markdownGateway";
import BlogSection from "../../components/custom/BlogSection";

export default function Blog({ blogPosts }) {
  return (
    <Layout title="Blog">
      <BlogSection
        blogPosts={blogPosts}
        title={<h1 className="mb-8">All blog posts</h1>}
        minHeight="min-h-screen-90"
        cardHeadingLevel={2}
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const markdownGateway = new MarkdownGateway("content/blog-posts");
  const getBlogPosts = new GetBlogPosts(markdownGateway);
  const blogPosts = getBlogPosts.execute();

  return { props: { blogPosts: blogPosts.blogPosts } };
}
