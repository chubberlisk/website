import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPostCard from "./BlogPostCard";

it("displays the title", () => {
  render(
    <BlogPostCard
      title="Blog post 1"
      summary="Amazing blog post"
      publishDate="2021-03-01T13:00:00"
      tags={[]}
      headingLevel={2}
      slug="post-1"
    />
  );

  expect(screen.getByText("Blog post 1")).toBeVisible();
});

it("formats the publish date like 1st March 2021", () => {
  render(
    <BlogPostCard
      title="Blog post 1"
      summary="Amazing blog post"
      publishDate="2021-03-01T13:00:00"
      tags={[]}
      headingLevel={2}
      slug="post-1"
    />
  );

  expect(screen.getByText("1 March 2021")).toBeVisible();
});

it("displays all the tags", () => {
  render(
    <BlogPostCard
      title="Blog post 1"
      summary="Amazing blog post"
      publishDate="2021-03-01T13:00:00"
      tags={["Tag 1", "Tag 2", "Tag 3"]}
      headingLevel={2}
      slug="post-1"
    />
  );

  expect(screen.getByText("Tag 1")).toBeVisible();
  expect(screen.getByText("Tag 2")).toBeVisible();
  expect(screen.getByText("Tag 3")).toBeVisible();
});

it("displays read link to blog page", () => {
  render(
    <BlogPostCard
      title="Blog post 1"
      summary="Amazing blog post"
      publishDate="2021-03-01T13:00:00"
      tags={[]}
      headingLevel={2}
      slug="post-1"
    />
  );

  expect(screen.getByTestId("readBlogPostLink")).toHaveTextContent(
    "Read Blog post 1 blog post →"
  );
  expect(screen.getByTestId("readBlogPostLink").closest("a")).toHaveAttribute(
    "href",
    "/blog/post-1"
  );
});
