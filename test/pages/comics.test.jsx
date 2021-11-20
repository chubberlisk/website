import React from "react";
import { render, screen } from "@testing-library/react";
import Comics from "../../src/pages/comics";

jest.mock("../../content/comics", () => [
  {
    title: "Comic title 1",
    publishDate: "2021-03-01",
    image: {
      src: "/path/to/comic-1.png",
      alt: "description for comic 1",
    },
    tags: ["Tag 1"],
  },
  {
    title: "Comic title 2",
    publishDate: "2021-09-13",
    image: {
      src: "/path/to/comic-2.png",
      alt: "description for comic 2",
    },
    tags: ["Tag 1", "Tag 2"],
  },
]);

it("orders comics by publish date with most recent first", () => {
  render(<Comics />);

  const comics = screen.getByTestId("comics");

  expect(comics.childNodes[0]).toHaveTextContent("Comic title 2");
  expect(comics.childNodes[1]).toHaveTextContent("Comic title 1");
});

it("sets a number for each comic with the most recent highest", () => {
  render(<Comics />);

  const comics = screen.getByTestId("comics");

  expect(comics.childNodes[0]).toHaveTextContent("#2");
  expect(comics.childNodes[1]).toHaveTextContent("#1");
});
