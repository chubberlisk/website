import React from "react";
import Layout from "@/components/core/Layout";
import LandingSection from "@/components/custom/LandingSection";
import AboutMeSection from "@/components/custom/AboutMeSection";
import LatestPaintingsSection from "@/components/custom/LatestPaintingsSection";
import ContactMeSection from "@/components/custom/ContactMeSection";
import GetBlogPosts from "@/useCases/getBlogPosts";
import GetWritings from "@/useCases/getWritings";
import MarkdownGateway from "@/gateways/markdownGateway";
import LatestBlogPostsSection from "@/components/custom/LatestBlogPostsSection";
import LatestWritingsSection from "@/components/custom/LatestWritingsSection";

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
  const markdownGateway = new MarkdownGateway({ contentDirectory: "content" });
  const getBlogPosts = new GetBlogPosts(markdownGateway);
  const blogPosts = getBlogPosts.execute();

  const getWritings = new GetWritings(markdownGateway);
  const writings = getWritings.execute();

  return {
    props: {
      latestBlogPosts: blogPosts.blogPosts.slice(0, 2),
      writings: writings.writings,
    },
  };
}
