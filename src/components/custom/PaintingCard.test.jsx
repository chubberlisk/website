import React from "react";
import { render, screen } from "@testing-library/react";
import PaintingCard from "./PaintingCard";

it("displays the title", () => {
  render(
    <PaintingCard
      title="Amazing painting title"
      image={{ src: "/path/to/image.png", alt: "description" }}
      publishDate="2021-03-01"
      tags={["Tag 1", "Tag 2", "Tag 3"]}
      number={1}
    />
  );

  expect(screen.getByText("Amazing painting title")).toBeVisible();
});

it("formats the publish date like 1st March 2021", () => {
  render(
    <PaintingCard
      title="Amazing painting title"
      image={{ src: "/path/to/image.png", alt: "description" }}
      publishDate="2021-03-01"
      tags={["Tag 1", "Tag 2", "Tag 3"]}
      number={1}
    />
  );

  expect(screen.getByText("Published on 1st March 2021")).toBeVisible();
});

it("displays the painting number", () => {
  render(
    <PaintingCard
      title="Amazing painting title"
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
    <PaintingCard
      title="Amazing painting title"
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
