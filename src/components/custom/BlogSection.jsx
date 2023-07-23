import React from "react";
import Section from "@/components/core/Section";
import BlogPostCard from "@/components/custom/BlogPostCard";

export default function BlogSection({
  blogPosts,
  title,
  children,
  minHeight,
  cardHeadingLevel,
}) {
  const environment = process.env.NODE_ENV;
  const blogPostsToShow =
    environment === "development"
      ? blogPosts
      : blogPosts.filter((blogPost) => !blogPost.metadata.draft);

  return (
    <Section id="blog" minHeight={minHeight}>
      {title}

      {blogPostsToShow.length === 0 ? (
        <p>There are no existing blog posts.</p>
      ) : (
        blogPostsToShow.map((blogPost) => (
          <BlogPostCard
            key={blogPost.metadata.title}
            title={blogPost.metadata.title}
            publishDateTime={blogPost.metadata.publishDateTime}
            summary={blogPost.metadata.summary}
            tags={blogPost.metadata.tags}
            slug={blogPost.metadata.slug}
            headingLevel={cardHeadingLevel}
          />
        ))
      )}

      {children}
    </Section>
  );
}
