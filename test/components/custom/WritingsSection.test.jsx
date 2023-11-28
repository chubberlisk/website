import React from "react";
import { render, screen } from "@testing-library/react";
import WritingsSection from "@/components/custom/WritingsSection";

jest.mock(
  "@/components/core/MarkdownToHtml",
  () =>
    ({ markdown }) =>
      markdown,
);

it("displays the title", () => {
  render(<WritingsSection title="Writings" writings={[]} />);

  expect(screen.getByText("Writings")).toBeVisible();
});

describe("when the environment is development", () => {
  beforeAll(() => (process.env.NODE_ENV = "development"));
  afterAll(() => (process.env.NODE_ENV = "test"));

  it("displays all writings", () => {
    render(
      <WritingsSection
        writings={[
          {
            metadata: { draft: true, publishDateTime: "2021-03-01T15:30:00" },
            content: "Draft Writing 1",
          },
          {
            metadata: { draft: false, publishDateTime: "2021-03-02T15:30:00" },
            content: "Writing 2",
          },
          {
            metadata: { draft: true, publishDateTime: "2021-03-03T15:30:00" },
            content: "Draft Writing 3",
          },
        ]}
      />,
    );

    expect(screen.getByText("Draft Writing 1")).toBeVisible();
    expect(screen.getByText("Writing 2")).toBeVisible();
    expect(screen.getByText("Draft Writing 3")).toBeVisible();
  });
});

describe("when the environment is production", () => {
  beforeAll(() => (process.env.NODE_ENV = "production"));
  afterAll(() => (process.env.NODE_ENV = "test"));

  it("hides draft writings", () => {
    render(
      <WritingsSection
        writings={[
          {
            metadata: { draft: true, publishDateTime: "2021-03-01T15:30:00" },
            content: "Draft Writing 1",
          },
          {
            metadata: { draft: false, publishDateTime: "2021-03-02T15:30:00" },
            content: "Writing 2",
          },
          {
            metadata: { draft: true, publishDateTime: "2021-03-03T15:30:00" },
            content: "Draft Writing 3",
          },
        ]}
      />,
    );

    expect(screen.queryByText("Draft Writing 1")).not.toBeInTheDocument();
    expect(screen.getByText("Writing 2")).toBeVisible();
    expect(screen.queryByText("Draft Writing 3")).not.toBeInTheDocument();
  });
});

it("orders writings by publish date with most recent first", () => {
  render(
    <WritingsSection
      writings={[
        {
          metadata: { draft: false, publishDateTime: "2021-01-01T15:30:00" },
          content: "Writing 1",
        },
        {
          metadata: { draft: false, publishDateTime: "2021-03-03T15:30:00" },
          content: "Writing 3",
        },
        {
          metadata: { draft: false, publishDateTime: "2021-02-02T15:30:00" },
          content: "Writing 2",
        },
      ]}
    />,
  );

  const writings = screen.getByTestId("writings");

  expect(writings.childNodes[0]).toHaveTextContent("Writing 3");
  expect(writings.childNodes[1]).toHaveTextContent("Writing 2");
  expect(writings.childNodes[2]).toHaveTextContent("Writing 1");
});

it("displays the number for each writing", () => {
  render(
    <WritingsSection
      writings={[
        {
          metadata: {
            draft: false,
            publishDateTime: "2021-03-03T15:30:00",
            number: 3,
          },
          content: "Writing 3",
        },
        {
          metadata: {
            draft: false,
            publishDateTime: "2021-03-02T15:30:00",
            number: 2,
          },
          content: "Writing 2",
        },
        {
          metadata: {
            draft: false,
            publishDateTime: "2021-03-01T15:30:00",
            number: 1,
          },
          content: "Writing 1",
        },
      ]}
    />,
  );

  const writings = screen.getByTestId("writings");

  expect(writings.childNodes[0]).toHaveTextContent("#3");
  expect(writings.childNodes[1]).toHaveTextContent("#2");
  expect(writings.childNodes[2]).toHaveTextContent("#1");
});

it("displays children", () => {
  render(
    <WritingsSection writings={[]}>
      <p>Children</p>
    </WritingsSection>,
  );

  expect(screen.getByText("Children")).toBeVisible();
});

describe("when there are no writings", () => {
  it("displays a message", () => {
    render(<WritingsSection writings={[]} />);

    expect(screen.getByText("There are no existing writings.")).toBeVisible();
  });
});
