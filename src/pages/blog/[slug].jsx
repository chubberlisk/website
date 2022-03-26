import React from "react";
import Layout from "../../components/core/Layout";
import MarkdownGateway from "../../gateways/markdownGateway";
import GetBlogPostBySlug from "../../useCases/getBlogPostBySlug";
import GetBlogPosts from "../../useCases/getBlogPosts";
import BlogPostSection from "../../components/custom/BlogPostSection";

export default function Blog({ blogPost }) {
  return (
    <Layout title={`${blogPost.metadata.title} - Blog`}>
      <BlogPostSection blogPost={blogPost} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const markdownGateway = new MarkdownGateway("content/blog-posts");
  const getBlogPosts = new GetBlogPosts(markdownGateway);
  const blogPosts = getBlogPosts.execute();
  const paths = blogPosts.blogPosts.map((blogPost) => ({
    params: {
      slug: blogPost.metadata.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const markdownGateway = new MarkdownGateway("content/blog-posts");
  const getBlogPostBySlug = new GetBlogPostBySlug(markdownGateway);
  const blogPost = getBlogPostBySlug.execute(params.slug);

  return { props: { blogPost } };
}
