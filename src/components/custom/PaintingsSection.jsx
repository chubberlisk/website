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
  padding,
}) {
  return (
    <Section id="paintings" minHeight={minHeight} padding={padding}>
      {title}

      <Text>{description}</Text>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        data-testid="paintings"
      >
        {paintings
          .sort(
            (paintingA, paintingB) =>
              new Date(paintingB.publishDateTime) -
              new Date(paintingA.publishDateTime),
          )
          .slice(0, displayLatest)
          .map(({ image, title, publishDateTime, tags }, index) => {
            const number = paintings.length - index;

            return (
              <PaintingCard
                id={number}
                title={title}
                publishDateTime={publishDateTime}
                image={image}
                tags={tags}
                number={number}
                key={title}
                headingLevel={cardHeadingLevel}
              />
            );
          })}
      </div>

      {children}
    </Section>
  );
}
