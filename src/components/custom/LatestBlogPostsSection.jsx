import React from "react";
import BlogSection from "./BlogSection";
import { useFlags } from "@happykit/flags/client";
import Link from "next/link";

const LatestBlogPostsSection = ({ latestBlogPosts }) => {
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
};

export default LatestBlogPostsSection;
