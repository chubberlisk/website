import React from "react";
import Section from "../core/Section";
import ComicCard from "./ComicCard";
import comics from "../../../content/comics";

const ComicsSection = () => (
  <Section id="comics">
    <div className="container md:my-5 lg:my-10">
      <h2>Comics</h2>

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
        data-testid="comics"
      >
        {comics
          .sort(
            (comicA, comicB) =>
              new Date(comicB.publishDate) - new Date(comicA.publishDate)
          )
          .map(({ image, title, publishDate, tags }, index) => (
            <ComicCard
              title={title}
              publishDate={publishDate}
              image={image}
              tags={tags}
              number={comics.length - index}
              key={title}
            />
          ))}
      </div>
    </div>
  </Section>
);

export default ComicsSection;
