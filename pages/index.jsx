import React from "react";
import Layout from "@/components/core/Layout";
import LandingSection from "@/components/custom/LandingSection";
import AboutMeSection from "@/components/custom/AboutMeSection";
import LatestPaintingsSection from "@/components/custom/LatestPaintingsSection";
import ContactMeSection from "@/components/custom/ContactMeSection";
import LatestBlogPostsSection from "@/components/custom/LatestBlogPostsSection";
import LatestWritingsSection from "@/components/custom/LatestWritingsSection";
import { getBlogPosts, getWritings } from "@/utils/AppContext";

export default function Home({ latestBlogPosts, writings }) {
  return (
    <Layout>
      <div className="divide-y-2 divide-wtw-yellow">
        <LandingSection />
        <AboutMeSection />
        <LatestBlogPostsSection latestBlogPosts={latestBlogPosts} />
        <LatestWritingsSection writings={writings} />
        <LatestPaintingsSection />
        <ContactMeSection />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogPosts = getBlogPosts.execute();
  const writings = getWritings.execute();

  return {
    props: {
      latestBlogPosts: blogPosts.blogPosts.slice(0, 2),
      writings: writings.writings,
    },
  };
}
