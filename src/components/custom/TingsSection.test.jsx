import React from "react";
import { render, screen } from "@testing-library/react";
import TingsSection from "./TingsSection";

jest.mock("./TingPostCard", () => {
  const TingPostCard = ({ content }) => <p>{content}</p>;

  return TingPostCard;
});

it("displays the title", () => {
  render(<TingsSection title="All Ting posts" tingPosts={[]} />);

  expect(screen.getByText("All Ting posts")).toBeVisible();
});

describe("when the environment is development", () => {
  beforeAll(() => (process.env.NODE_ENV = "development"));
  afterAll(() => (process.env.NODE_ENV = "test"));

  it("displays all Ting posts", () => {
    render(
      <TingsSection
        tingPosts={[
          {
            metadata: { draft: true, timestamp: "2021-03-01T15:30:00" },
            content: "Draft Ting post 1",
          },
          {
            metadata: { draft: false, timestamp: "2021-03-02T15:30:00" },
            content: "Ting post 2",
          },
          {
            metadata: { draft: true, timestamp: "2021-03-03T15:30:00" },
            content: "Draft Ting post 3",
          },
        ]}
      />,
    );

    expect(screen.getByText("Draft Ting post 1")).toBeVisible();
    expect(screen.getByText("Ting post 2")).toBeVisible();
    expect(screen.getByText("Draft Ting post 3")).toBeVisible();
  });
});

describe("when the environment is production", () => {
  beforeAll(() => (process.env.NODE_ENV = "production"));
  afterAll(() => (process.env.NODE_ENV = "test"));

  it("hides draft blog posts", () => {
    render(
      <TingsSection
        tingPosts={[
          {
            metadata: { draft: true, timestamp: "2021-03-01T15:30:00" },
            content: "Draft Ting post 1",
          },
          {
            metadata: { draft: false, timestamp: "2021-03-02T15:30:00" },
            content: "Ting post 2",
          },
          {
            metadata: { draft: true, timestamp: "2021-03-03T15:30:00" },
            content: "Draft Ting post 3",
          },
        ]}
      />,
    );

    expect(screen.queryByText("Draft Ting post 1")).not.toBeInTheDocument();
    expect(screen.getByText("Ting post 2")).toBeVisible();
    expect(screen.queryByText("Draft Ting post 3")).not.toBeInTheDocument();
  });
});

it("displays children", () => {
  render(
    <TingsSection tingPosts={[]}>
      <p>Children</p>
    </TingsSection>,
  );

  expect(screen.getByText("Children")).toBeVisible();
});

describe("when there are no blog posts", () => {
  it("displays a message", () => {
    render(<TingsSection tingPosts={[]} tags={[]} cardHeadingLevel={2} />);

    expect(screen.getByText("There are no existing Ting posts.")).toBeVisible();
  });
});
