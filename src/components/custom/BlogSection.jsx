import React from "react";
import Section from "../core/Section";
import BlogPostCard from "./BlogPostCard";

const BlogSection = ({ blogPosts }) => (
  <Section id="blog" minHeight="min-h-screen-90">
    <div className="container">
      <h1 className="mb-8">All blog posts</h1>

      {blogPosts.map((blogPost) => (
        <BlogPostCard
          key={blogPost.metadata.title}
          title={blogPost.metadata.title}
          publishDate={blogPost.metadata.publishDate}
          summary={blogPost.metadata.summary}
          tags={blogPost.metadata.tags}
        />
      ))}
    </div>
  </Section>
);

export default BlogSection;
