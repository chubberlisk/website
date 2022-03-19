import React from "react";
import { useFlags } from "@happykit/flags/client";
import Link from "next/link";
import BlogSection from "./BlogSection";

export default function LatestBlogPostsSection({ latestBlogPosts }) {
  const { flags } = useFlags();

  return flags?.enableBlog ? (
    <BlogSection
      blogPosts={latestBlogPosts}
      title={<h2 className="mb-8">Latest blog posts</h2>}
    >
      <Link href="/blog">
        <a>View all blog posts →</a>
      </Link>
    </BlogSection>
  ) : null;
}
