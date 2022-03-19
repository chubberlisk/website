import React from "react";
import Layout from "../components/core/Layout";
import LandingSection from "../components/custom/LandingSection";
import AboutMeSection from "../components/custom/AboutMeSection";
import PaintingsSection from "../components/custom/PaintingsSection";
import ContactMeSection from "../components/custom/ContactMeSection";
import GetBlogPosts from "../useCases/getBlogPosts";
import MarkdownGateway from "../gateways/markdownGateway";
import LatestBlogPostsSection from "../components/custom/LatestBlogPostsSection";

const Home = ({ latestBlogPosts }) => (
  <Layout>
    <div className="divide-y-2 divide-wtw-yellow">
      <LandingSection />
      <AboutMeSection />
      <LatestBlogPostsSection latestBlogPosts={latestBlogPosts} />
      <PaintingsSection />
      <ContactMeSection />
    </div>
  </Layout>
);

export async function getStaticProps() {
  const markdownGateway = new MarkdownGateway("content/blog-posts");
  const getBlogPosts = new GetBlogPosts(markdownGateway);
  const blogPosts = getBlogPosts.execute();

  return { props: { latestBlogPosts: blogPosts.blogPosts.slice(0, 2) } };
}

export default Home;
