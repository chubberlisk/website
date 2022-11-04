import React from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Layout from "../../components/core/Layout";
import MarkdownGateway from "../../gateways/markdownGateway";
import GetBlogPostBySlug from "../../useCases/getBlogPostBySlug";
import GetBlogPosts from "../../useCases/getBlogPosts";
import BlogPostSection from "../../components/custom/BlogPostSection";

export default function Blog({ blogPost }) {
  const { asPath } = useRouter();

  return (
    <>
      <NextSeo
        title={`${blogPost.metadata.title} - Blog`}
        description={blogPost.metadata.summary}
        openGraph={{
          title: blogPost.metadata.title,
          description: blogPost.metadata.summary,
          url: `https://wentingwang.co.uk${asPath}`,
          type: "article",
          article: {
            publishedTime: blogPost.metadata.publishDate,
            authors: [],
            tags: blogPost.metadata.tags,
          },
          images: [
            {
              url: `https://wentingwang.co.uk${blogPost.metadata.coverImage}`,
              width: 1000,
              height: 420,
            },
          ],
        }}
      />
      <Layout>
        <BlogPostSection blogPost={blogPost} />
      </Layout>
    </>
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
