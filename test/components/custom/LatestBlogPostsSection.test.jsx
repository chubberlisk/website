import React from "react";
import { render, screen } from "@testing-library/react";
import LatestBlogPostsSection from "@/components/custom/LatestBlogPostsSection";

it("displays the title", () => {
  render(<LatestBlogPostsSection blogPosts={[]} />);

  expect(screen.getByText("Latest blog posts")).toBeVisible();
});

it("displays view all blog posts link to blog page", () => {
  render(<LatestBlogPostsSection blogPosts={[]} />);

  expect(screen.getByText("View all blog posts →")).toBeVisible();
  expect(screen.getByText("View all blog posts →")).toHaveAttribute(
    "href",
    "/blog",
  );
});

it("displays the latest three blog posts by default", () => {
  render(
    <LatestBlogPostsSection
      blogPosts={[
        {
          metadata: { title: "Blog post 1" },
        },
        {
          metadata: { title: "Blog post 2" },
        },
        {
          metadata: { title: "Blog post 3" },
        },
        {
          metadata: { title: "Blog post 4" },
        },
        {
          metadata: { title: "Blog post 5" },
        },
      ]}
    />,
  );

  expect(screen.getByText("Blog post 1")).toBeVisible();
  expect(screen.getByText("Blog post 2")).toBeVisible();
  expect(screen.getByText("Blog post 3")).toBeVisible();
  expect(screen.queryByText("Blog post 4")).not.toBeInTheDocument();
  expect(screen.queryByText("Blog post 5")).not.toBeInTheDocument();
});

it("displays the number of blog posts specified", () => {
  render(
    <LatestBlogPostsSection
      blogPosts={[
        {
          metadata: { title: "Blog post 1" },
        },
        {
          metadata: { title: "Blog post 2" },
        },
        {
          metadata: { title: "Blog post 3" },
        },
        {
          metadata: { title: "Blog post 4" },
        },
        {
          metadata: { title: "Blog post 5" },
        },
      ]}
      displayLatest={2}
    />,
  );

  expect(screen.getByText("Blog post 1")).toBeVisible();
  expect(screen.getByText("Blog post 2")).toBeVisible();
  expect(screen.queryByText("Blog post 3")).not.toBeInTheDocument();
  expect(screen.queryByText("Blog post 4")).not.toBeInTheDocument();
  expect(screen.queryByText("Blog post 5")).not.toBeInTheDocument();
});
