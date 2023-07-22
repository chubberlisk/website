import React from "react";
import { render, screen } from "@testing-library/react";
import WritingCard from "./WritingCard";

jest.mock(
  "../core/MarkdownToHtml",
  () =>
    ({ markdown }) =>
      markdown,
);

it("displays the content", () => {
  render(
    <WritingCard
      publishDateTime="2021-03-01T13:00:00"
      content="Writing content."
    />,
  );

  expect(screen.getByText("Writing content.")).toBeVisible();
});

it("displays all the tags", () => {
  render(
    <WritingCard
      publishDateTime="2021-03-01T13:00:00"
      content="Writing content."
      tags={["Tag 1", "Tag 2", "Tag 3"]}
    />,
  );

  expect(screen.getByText("Tag 1")).toBeVisible();
  expect(screen.getByText("Tag 2")).toBeVisible();
  expect(screen.getByText("Tag 3")).toBeVisible();
});

it("displays the writing number", () => {
  render(
    <WritingCard
      publishDateTime="2021-03-01T13:00:00"
      content="Writing content."
      tags={["Tag 1", "Tag 2", "Tag 3"]}
      number={1}
    />,
  );

  expect(screen.getByText("#1")).toBeVisible();
});

it("formats the publish date like 1 March 2021", () => {
  render(
    <WritingCard
      publishDateTime="2021-03-01T13:00:00"
      content="Writing content."
    />,
  );

  expect(screen.getByText("1 March 2021")).toBeVisible();
});
