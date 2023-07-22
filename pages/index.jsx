import React from "react";
import Layout from "../src/components/core/Layout";
import LandingSection from "../src/components/custom/LandingSection";
import AboutMeSection from "../src/components/custom/AboutMeSection";
import LatestPaintingsSection from "../src/components/custom/LatestPaintingsSection";
import ContactMeSection from "../src/components/custom/ContactMeSection";
import GetBlogPosts from "../src/useCases/getBlogPosts";
import GetWritings from "../src/useCases/getWritings";
import MarkdownGateway from "../src/gateways/markdownGateway";
import LatestBlogPostsSection from "../src/components/custom/LatestBlogPostsSection";
import LatestWritingsSection from "../src/components/custom/LatestWritingsSection";

export default function Home({ latestBlogPosts, writings }) {
  return (
    <Layout>
      <div className="divide-y-2 divide-wtw-yellow">
        <LandingSection />
        <AboutMeSection />
        <LatestBlogPostsSection latestBlogPosts={latestBlogPosts} />
        <LatestPaintingsSection />
        <LatestWritingsSection writings={writings} />
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
