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
  return (
    <Section id="blog" minHeight={minHeight}>
      <div className="container">
        {title}

        {blogPosts.map((blogPost) => (
          <BlogPostCard
            key={blogPost.metadata.title}
            title={blogPost.metadata.title}
            publishDate={blogPost.metadata.publishDate}
            summary={blogPost.metadata.summary}
            tags={blogPost.metadata.tags}
            headingLevel={cardHeadingLevel}
          />
        ))}

        {children}
      </div>
    </Section>
  );
}
