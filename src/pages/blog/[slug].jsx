import React from "react";
import Layout from "../../components/core/Layout";
import MarkdownGateway from "../../gateways/markdownGateway";
import GetBlogPostBySlug from "../../useCases/getBlogPostBySlug";
import GetBlogPosts from "../../useCases/getBlogPosts";
import Section from "../../components/core/Section";
import MarkdownToHtml from "../../components/core/MarkdownToHtml";
import { formatDate } from "../../lib/formatters/date";
import Link from "next/link";

export default function Blog({ blogPost }) {
  return (
    <Layout title={`${blogPost.metadata.title} - Blog - Wen Ting Wang`}>
      <Section minHeight="min-h-screen-90">
        <div className="container">
          <div className="mb-5 xl:mb-8">
            <Link href="/blog">
              <a>← Back to all blog posts</a>
            </Link>
          </div>

          <h1>
            <span className="block text-xl text-wtw-yellow">
              <time dateTime={blogPost.metadata.publishDate}>
                {formatDate(blogPost.metadata.publishDate)}
              </time>
            </span>
            {blogPost.metadata.title}
          </h1>

          <div className="flex flex-wrap mb-3">
            {blogPost.metadata.tags?.map((tag) => (
              <span
                className="flex-shrink rounded-lg bg-gradient-to-r from-wtw-yellow to-wtw-orange text-wtw-black px-3 font-black mr-2 mb-1"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <MarkdownToHtml markdown={blogPost.content} />
        </div>
      </Section>
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
