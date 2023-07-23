import React from "react";
import { render, screen } from "@testing-library/react";
import LatestBlogPostsSection from "./LatestBlogPostsSection";

it("displays the title", () => {
  render(<LatestBlogPostsSection latestBlogPosts={[]} />);

  expect(screen.getByText("Latest blog posts")).toBeVisible();
});

it("displays view all blog posts link to blog page", () => {
  render(<LatestBlogPostsSection latestBlogPosts={[]} />);

  expect(screen.getByText("View all blog posts →")).toBeVisible();
  expect(screen.getByText("View all blog posts →")).toHaveAttribute(
    "href",
    "/blog",
  );
});

it("displays provided blog posts", () => {
  render(
    <LatestBlogPostsSection
      latestBlogPosts={[
        {
          metadata: { title: "Blog post 1" },
        },
        {
          metadata: { title: "Blog post 2" },
        },
        {
          metadata: { title: "Blog post 3" },
        },
      ]}
    />,
  );

  expect(screen.getByText("Blog post 1")).toBeVisible();
  expect(screen.getByText("Blog post 2")).toBeVisible();
  expect(screen.getByText("Blog post 3")).toBeVisible();
});
