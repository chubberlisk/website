import React from "react";
import { render, screen } from "@testing-library/react";
import WritingCard from "./WritingCard";

jest.mock("../core/MarkdownToHtml", () => () => "Writing content.");

it("displays the content", () => {
  render(
    <WritingCard timestamp="2021-03-01T13:00:00" content="Writing content." />,
  );

  expect(screen.getByText("Writing content.")).toBeVisible();
});

it("formats the timestamp like 1 March 2021", () => {
  render(
    <WritingCard timestamp="2021-03-01T13:00:00" content="Writing content." />,
  );

  expect(screen.getByText("1 March 2021")).toBeVisible();
});
