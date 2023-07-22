import React from "react";
import { render, screen } from "@testing-library/react";
import PaintingsSection from "./PaintingsSection";

jest.mock("../../../content/paintings", () => [
  {
    title: "Painting title 1",
    publishDateTime: "2021-03-01T13:00:00Z",
    image: {
      src: "/path/to/painting-1.png",
      alt: "description for Painting 1",
    },
    tags: ["Tag 1"],
  },
  {
    title: "Painting title 2",
    publishDateTime: "2021-09-13T13:00:00Z",
    image: {
      src: "/path/to/painting-2.png",
      alt: "description for Painting 2",
    },
    tags: ["Tag 1", "Tag 2"],
  },
]);

it("orders paintings by publish date with most recent first", () => {
  render(<PaintingsSection />);

  const paintings = screen.getByTestId("paintings");

  expect(paintings.childNodes[0]).toHaveTextContent("Painting title 2");
  expect(paintings.childNodes[1]).toHaveTextContent("Painting title 1");
});

it("sets a number for each Painting with the most recent highest", () => {
  render(<PaintingsSection />);

  const paintings = screen.getByTestId("paintings");

  expect(paintings.childNodes[0]).toHaveTextContent("#2");
  expect(paintings.childNodes[1]).toHaveTextContent("#1");
});
