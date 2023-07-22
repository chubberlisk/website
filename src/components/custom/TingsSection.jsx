import React from "react";
import Section from "../core/Section";
import TingPostCard from "./TingPostCard";

export default function TingSection({ tingPosts, title, children, minHeight }) {
  const environment = process.env.NODE_ENV;
  const tingPostsToShow =
    environment == "development"
      ? tingPosts
      : tingPosts.filter((tingPost) => !tingPost.metadata.draft);

  return (
    <Section id="tings" minHeight={minHeight}>
      {title}

      {tingPostsToShow.length == 0 ? (
        <p>There are no existing Ting posts.</p>
      ) : (
        tingPostsToShow.map((tingPost) => (
          <TingPostCard
            key={tingPost.metadata.timestamp}
            timestamp={tingPost.metadata.timestamp}
            content={tingPost.content}
          />
        ))
      )}

      {children}
    </Section>
  );
}
