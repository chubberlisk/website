import React from "react";
import Section from "../core/Section";
import BlogPostCard from "./BlogPostCard";

export default function BlogSection({
  blogPosts,
  title,
  children,
  minHeight,
  cardHeadingLevel,
}) {
  const environment = process.env.NODE_ENV;
  const blogPostsToShow =
    environment == "development"
      ? blogPosts
      : blogPosts.filter((blogPost) => !blogPost.metadata.draft);

  return (
    <Section id="blog" minHeight={minHeight}>
      {title}

      {blogPostsToShow.map((blogPost) => (
        <BlogPostCard
          key={blogPost.metadata.title}
          title={blogPost.metadata.title}
          publishDate={blogPost.metadata.publishDate}
          summary={blogPost.metadata.summary}
          tags={blogPost.metadata.tags}
          slug={blogPost.metadata.slug}
          headingLevel={cardHeadingLevel}
        />
      ))}

      {children}
    </Section>
  );
}
