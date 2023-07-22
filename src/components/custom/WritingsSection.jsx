import React from "react";
import Section from "../core/Section";
import WritingCard from "./WritingCard";

export default function WritingsSection({
  displayLatest,
  writings,
  title,
  children,
  minHeight,
  cardHeadingLevel = 2,
}) {
  const environment = process.env.NODE_ENV;
  const writingsToShow =
    environment == "development"
      ? writings
      : writings.filter((writing) => !writing.metadata.draft);

  return (
    <Section id="writings" minHeight={minHeight}>
      {title}

      <div data-testid="writings">
        {writingsToShow.length == 0 ? (
          <p>There are no existing writings.</p>
        ) : (
          writingsToShow
            .sort(
              (writingA, writingB) =>
                new Date(writingB.metadata.publishDateTime) -
                new Date(writingA.metadata.publishDateTime),
            )
            .slice(0, displayLatest || writings.length)
            .map(
              (
                { metadata: { title, publishDateTime, tags }, content },
                index,
              ) => {
                const number = writingsToShow.length - index;

                return (
                  <WritingCard
                    id={`writing-${number}`}
                    title={title}
                    key={publishDateTime}
                    publishDateTime={publishDateTime}
                    tags={tags}
                    content={content}
                    number={number}
                    headingLevel={cardHeadingLevel}
                  />
                );
              },
            )
        )}
      </div>

      {children}
    </Section>
  );
}
