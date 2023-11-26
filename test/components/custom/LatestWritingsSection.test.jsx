import React from "react";
import { render, screen } from "@testing-library/react";
import LatestWritingsSection from "@/components/custom/LatestWritingsSection";

jest.mock(
  "@/components/core/MarkdownToHtml",
  () =>
    ({ markdown }) =>
      markdown,
);

it("displays the title", () => {
  render(<LatestWritingsSection writings={[]} />);

  expect(screen.getByText("Latest writings")).toBeVisible();
});

it("displays view all writings link to writings page", () => {
  render(<LatestWritingsSection writings={[]} />);

  expect(screen.getByText("View all writings →")).toBeVisible();
  expect(screen.getByText("View all writings →")).toHaveAttribute(
    "href",
    "/writings",
  );
});
