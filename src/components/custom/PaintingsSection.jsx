import React from "react";
import Section from "../core/Section";
import PaintingCard from "./PaintingCard";
import paintings from "../../../content/paintings";

export default function PaintingsSection({
  displayLatest = paintings.length,
  title,
  description,
  children,
  minHeight,
}) {
  return (
    <Section id="paintings" minHeight={minHeight}>
      <div className="container">
        {title}

        {description}

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
            .slice(0, displayLatest)
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

        {children}
      </div>
    </Section>
  );
}
