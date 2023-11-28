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

it("displays the latest two writings by default", () => {
  render(
    <LatestWritingsSection
      writings={[
        {
          metadata: {
            title: "Writing 5",
            publishDateTime: "2021-03-05T15:30:00",
          },
        },
        {
          metadata: {
            title: "Writing 4",
            publishDateTime: "2021-03-04T14:30:00",
          },
        },
        {
          metadata: {
            title: "Writing 3",
            publishDateTime: "2021-03-03T13:30:00",
          },
        },
        {
          metadata: {
            title: "Writing 2",
            publishDateTime: "2021-03-02T12:30:00",
          },
        },
        {
          metadata: {
            title: "Writing 1",
            publishDateTime: "2021-03-01T11:30:00",
          },
        },
      ]}
    />,
  );

  expect(screen.getByText("Writing 5")).toBeVisible();
  expect(screen.getByText("Writing 4")).toBeVisible();
  expect(screen.queryByText("Writing 3")).not.toBeInTheDocument();
  expect(screen.queryByText("Writing 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Writing 1")).not.toBeInTheDocument();
});

it("displays the number of writings specified", () => {
  render(
    <LatestWritingsSection
      writings={[
        {
          metadata: {
            title: "Writing 5",
            publishDateTime: "2021-03-05T15:30:00",
          },
        },
        {
          metadata: {
            title: "Writing 4",
            publishDateTime: "2021-03-04T14:30:00",
          },
        },
        {
          metadata: {
            title: "Writing 3",
            publishDateTime: "2021-03-03T13:30:00",
          },
        },
        {
          metadata: {
            title: "Writing 2",
            publishDateTime: "2021-03-02T12:30:00",
          },
        },
        {
          metadata: {
            title: "Writing 1",
            publishDateTime: "2021-03-01T11:30:00",
          },
        },
      ]}
      displayLatest={2}
    />,
  );

  expect(screen.getByText("Writing 5")).toBeVisible();
  expect(screen.getByText("Writing 4")).toBeVisible();
  expect(screen.queryByText("Writing 3")).not.toBeInTheDocument();
  expect(screen.queryByText("Writing 2")).not.toBeInTheDocument();
  expect(screen.queryByText("Writing 1")).not.toBeInTheDocument();
});
