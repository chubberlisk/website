import React from "react";
import Link from "next/link";
import BlogSection from "@/components/custom/BlogSection";

export default function LatestBlogPostsSection({
  blogPosts,
  displayLatest = 3,
}) {
  const latestBlogPosts = blogPosts.slice(0, displayLatest);

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
