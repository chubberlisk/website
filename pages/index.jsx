import React from "react";
import Layout from "../src/components/core/Layout";
import LandingSection from "../src/components/custom/LandingSection";
import AboutMeSection from "../src/components/custom/AboutMeSection";
import LatestPaintingsSection from "../src/components/custom/LatestPaintingsSection";
import ContactMeSection from "../src/components/custom/ContactMeSection";
import GetBlogPosts from "../src/useCases/getBlogPosts";
import MarkdownGateway from "../src/gateways/markdownGateway";
import LatestBlogPostsSection from "../src/components/custom/LatestBlogPostsSection";

export default function Home({ latestBlogPosts }) {
  return (
    <Layout>
      <div className="divide-y-2 divide-wtw-yellow">
        <LandingSection />
        <AboutMeSection />
        <LatestBlogPostsSection latestBlogPosts={latestBlogPosts} />
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

  return { props: { latestBlogPosts: blogPosts.blogPosts.slice(0, 2) } };
}
