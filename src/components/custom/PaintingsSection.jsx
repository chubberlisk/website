import React from "react";
import Section from "../core/Section";
import PaintingCard from "./PaintingCard";
import paintings from "../../../content/paintings";

export default function PaintingsSection() {
  return (
    <Section id="paintings">
      <div className="container md:my-5 lg:my-10">
        <h2>Paintings</h2>

        <p className="mb-5">
          These are a poor attempt at making comics using Microsoft Paint. It
          focuses on a fairy called Tingker Bell among other Tings. Find them on{" "}
          <a
            href="https://www.webtoons.com/en/challenge/i-am-tingker-bell/list?title_no=578845"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="I am Tingker Bell on Webtoons"
          >
            Webtoons
          </a>
          {", "}
          <a
            href="https://www.instagram.com/chubbertiste/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chubbertiste's Instagram"
          >
            Instagram
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/chubbertiste"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chubbertiste's Twitter"
          >
            Twitter
          </a>{" "}
          as well.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          data-testid="paintings"
        >
          {paintings
            .sort(
              (paintingA, paintingB) =>
                new Date(paintingB.publishDate) -
                new Date(paintingA.publishDate)
            )
            .map(({ image, title, publishDate, tags }, index) => (
              <PaintingCard
                title={title}
                publishDate={publishDate}
                image={image}
                tags={tags}
                number={paintings.length - index}
                key={title}
              />
            ))}
        </div>
      </div>
    </Section>
  );
}
