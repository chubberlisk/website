import React from "react";
import { render, screen } from "@testing-library/react";
import TingPostCard from "./TingPostCard";

jest.mock("../core/MarkdownToHtml", () => () => "Ting post content.");

it("displays the content", () => {
  render(
    <TingPostCard
      timestamp="2021-03-01T13:00:00"
      content="Ting post content."
    />,
  );

  expect(screen.getByText("Ting post content.")).toBeVisible();
});

it("formats the timestamp like 1 March 2021", () => {
  render(
    <TingPostCard
      timestamp="2021-03-01T13:00:00"
      content="Ting post content."
    />,
  );

  expect(screen.getByText("1 March 2021")).toBeVisible();
});
