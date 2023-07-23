import React from "react";
import Link from "next/link";
import BlogSection from "@/components/custom/BlogSection";

export default function LatestBlogPostsSection({ latestBlogPosts }) {
  return (
    <BlogSection
      blogPosts={latestBlogPosts}
      title={<h2>Latest blog posts</h2>}
      cardHeadingLevel={3}
    >
      <Link href="/blog">View all blog posts →</Link>
    </BlogSection>
  );
}
