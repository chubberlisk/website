import React from "react";
import Layout from "../components/core/Layout";
import Section from "../components/core/Section";
import ComicCard from "../components/custom/ComicCard";
import comics from "../../content/comics";

const Comics = () => (
  <Layout title="Comics | Wen Ting Wang">
    <Section id="comics" minHeight="min-h-screen-90">
      <div className="container">
        <h1>Comics</h1>

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
  </Layout>
);

export default Comics;
