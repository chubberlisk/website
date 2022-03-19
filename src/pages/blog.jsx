import React from "react";
import Layout from "../components/core/Layout";
import GetBlogPosts from "../useCases/getBlogPosts";
import MarkdownGateway from "../gateways/markdownGateway";
import BlogSection from "../components/custom/BlogSection";

const Blog = ({ blogPosts }) => (
  <Layout>
    <BlogSection blogPosts={blogPosts} />
  </Layout>
);

export async function getStaticProps() {
  const markdownGateway = new MarkdownGateway("content/blog-posts");
  const getBlogPosts = new GetBlogPosts(markdownGateway);
  const blogPosts = getBlogPosts.execute();

  return { props: { blogPosts: blogPosts.blogPosts } };
}

export default Blog;
