import React from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Layout from "@/components/core/Layout";
import BlogPostSection from "@/components/custom/BlogPostSection";
import { getBlogPostBySlug, getBlogPosts } from "@/utils/AppContext";

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
            publishedTime: blogPost.metadata.publishDateTime,
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
        twitter={{
          handle: "@chubberlisk",
          site: "@chubberlisk",
          cardType: "summary_large_image",
        }}
      />
      <Layout>
        <BlogPostSection blogPost={blogPost} padding="py-6 sm:pb-8 sm:pt-0" />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
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
  const blogPost = getBlogPostBySlug.execute(params.slug);

  return { props: { blogPost } };
}
