import React from "react";
import Section from "../core/Section";
import PaintingCard from "./PaintingCard";
import paintings from "../../../content/paintings";
import Text from "../core/Text";

export default function PaintingsSection({
  displayLatest = paintings.length,
  title,
  description,
  children,
  minHeight,
  cardHeadingLevel = 2,
}) {
  return (
    <Section id="paintings" minHeight={minHeight}>
      {title}

      <Text>{description}</Text>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        data-testid="paintings"
      >
        {paintings
          .sort(
            (paintingA, paintingB) =>
              new Date(paintingB.publishDate) - new Date(paintingA.publishDate)
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
              headingLevel={cardHeadingLevel}
            />
          ))}
      </div>

      {children}
    </Section>
  );
}
