import React from "react";
import { render, screen } from "@testing-library/react";
import ComicCard from "./ComicCard";

it("displays the title", () => {
  render(
    <ComicCard
      title="Amazing comic title"
      image={{ src: "/path/to/image.png", alt: "description" }}
      publishDate="2021-03-01"
      tags={["Tag 1", "Tag 2", "Tag 3"]}
      number={1}
    />
  );

  expect(screen.getByText("Amazing comic title")).toBeVisible();
});

it("formats the publish date", () => {
  render(
    <ComicCard
      title="Amazing comic title"
      image={{ src: "/path/to/image.png", alt: "description" }}
      publishDate="2021-03-01"
      tags={["Tag 1", "Tag 2", "Tag 3"]}
      number={1}
    />
  );

  expect(screen.getByText("Published on 1st March 2021")).toBeVisible();
});

it("displays the comic number", () => {
  render(
    <ComicCard
      title="Amazing comic title"
      image={{ src: "/path/to/image.png", alt: "description" }}
      publishDate="2021-03-01"
      tags={["Tag 1", "Tag 2", "Tag 3"]}
      number={1}
    />
  );

  expect(screen.getByText("#1")).toBeVisible();
});

it("displays all tags", () => {
  render(
    <ComicCard
      title="Amazing comic title"
      image={{ src: "/path/to/image.png", alt: "description" }}
      publishDate="2021-03-01"
      tags={["Tag 1", "Tag 2", "Tag 3"]}
      number={1}
    />
  );

  expect(screen.getByText("Tag 1")).toBeVisible();
  expect(screen.getByText("Tag 2")).toBeVisible();
  expect(screen.getByText("Tag 3")).toBeVisible();
});
