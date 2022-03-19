import React from "react";
import Layout from "../components/core/Layout";
import LandingSection from "../components/custom/LandingSection";
import AboutMeSection from "../components/custom/AboutMeSection";
import LatestPaintingsSection from "../components/custom/LatestPaintingsSection";
import ContactMeSection from "../components/custom/ContactMeSection";
import GetBlogPosts from "../useCases/getBlogPosts";
import MarkdownGateway from "../gateways/markdownGateway";
import LatestBlogPostsSection from "../components/custom/LatestBlogPostsSection";

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
  const markdownGateway = new MarkdownGateway("content/blog-posts");
  const getBlogPosts = new GetBlogPosts(markdownGateway);
  const blogPosts = getBlogPosts.execute();

  return { props: { latestBlogPosts: blogPosts.blogPosts.slice(0, 2) } };
}
