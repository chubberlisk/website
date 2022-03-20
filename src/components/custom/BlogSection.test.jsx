import React from "react";
import { render, screen } from "@testing-library/react";
import BlogSection from "./BlogSection";

it("displays the title", () => {
  render(
    <BlogSection
      title="All blog posts"
      blogPosts={[]}
      tags={[]}
      cardHeadingLevel={2}
    />
  );

  expect(screen.getByText("All blog posts")).toBeVisible();
});

it("displays provided blog posts", () => {
  render(
    <BlogSection
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
      ]}
      tags={[]}
      cardHeadingLevel={2}
    />
  );

  expect(screen.getByText("Blog post 1")).toBeVisible();
  expect(screen.getByText("Blog post 2")).toBeVisible();
  expect(screen.getByText("Blog post 3")).toBeVisible();
});

it("displays children", () => {
  render(
    <BlogSection blogPosts={[]} tags={[]} cardHeadingLevel={2}>
      <p>Children</p>
    </BlogSection>
  );

  expect(screen.getByText("Children")).toBeVisible();
});
