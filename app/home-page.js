"use client";

import React from "react";
import LandingSection from "@/components/custom/LandingSection";
import AboutMeSection from "@/components/custom/AboutMeSection";
import LatestBlogPostsSection from "@/components/custom/LatestBlogPostsSection";
import LatestWritingsSection from "@/components/custom/LatestWritingsSection";
import LatestPaintingsSection from "@/components/custom/LatestPaintingsSection";
import ContactMeSection from "@/components/custom/ContactMeSection";

export default function HomePage({ latestBlogPosts, writings }) {
  return (
    <div className="divide-y-2 divide-wtw-yellow">
      <LandingSection />
      <AboutMeSection />
      <LatestBlogPostsSection latestBlogPosts={latestBlogPosts} />
      <LatestWritingsSection writings={writings} />
      <LatestPaintingsSection />
      <ContactMeSection />
    </div>
  );
}
