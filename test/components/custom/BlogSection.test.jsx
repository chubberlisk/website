import React from "react";
import { render, screen } from "@testing-library/react";
import BlogSection from "../../../src/components/custom/BlogSection";

it("displays the title", () => {
  render(
    <BlogSection
      title="All blog posts"
      blogPosts={[]}
      tags={[]}
      cardHeadingLevel={2}
    />,
  );

  expect(screen.getByText("All blog posts")).toBeVisible();
});

describe("when the environment is development", () => {
  beforeAll(() => (process.env.NODE_ENV = "development"));
  afterAll(() => (process.env.NODE_ENV = "test"));

  it("displays all blog posts", () => {
    render(
      <BlogSection
        blogPosts={[
          {
            metadata: { title: "Draft blog post 1", draft: true },
          },
          {
            metadata: { title: "Blog post 1", draft: false },
          },
          {
            metadata: { title: "Draft blog post 2", draft: true },
          },
        ]}
        tags={[]}
        cardHeadingLevel={2}
      />,
    );

    expect(screen.getByText("Draft blog post 1")).toBeVisible();
    expect(screen.getByText("Blog post 1")).toBeVisible();
    expect(screen.getByText("Draft blog post 2")).toBeVisible();
  });
});

describe("when the environment is production", () => {
  beforeAll(() => (process.env.NODE_ENV = "production"));
  afterAll(() => (process.env.NODE_ENV = "test"));

  it("hides draft blog posts", () => {
    render(
      <BlogSection
        blogPosts={[
          {
            metadata: { title: "Draft blog post 1", draft: true },
          },
          {
            metadata: { title: "Blog post 1", draft: false },
          },
          {
            metadata: { title: "Draft blog post 3", draft: true },
          },
        ]}
        tags={[]}
        cardHeadingLevel={2}
      />,
    );

    expect(screen.queryByText("Draft blog post 1")).not.toBeInTheDocument();
    expect(screen.getByText("Blog post 1")).toBeVisible();
    expect(screen.queryByText("Draft blog post 3")).not.toBeInTheDocument();
  });
});

it("displays children", () => {
  render(
    <BlogSection blogPosts={[]} tags={[]} cardHeadingLevel={2}>
      <p>Children</p>
    </BlogSection>,
  );

  expect(screen.getByText("Children")).toBeVisible();
});

describe("when there are no blog posts", () => {
  it("displays a message", () => {
    render(<BlogSection blogPosts={[]} tags={[]} cardHeadingLevel={2} />);

    expect(screen.getByText("There are no existing blog posts.")).toBeVisible();
  });
});
