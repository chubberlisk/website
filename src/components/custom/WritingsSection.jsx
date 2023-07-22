import React from "react";
import Section from "../core/Section";
import WritingCard from "./WritingCard";

export default function WritingsSection({
  writings,
  title,
  children,
  minHeight,
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
            .map(({ metadata: { publishDateTime, tags }, content }, index) => {
              const number = writingsToShow.length - index;

              return (
                <WritingCard
                  key={publishDateTime}
                  publishDateTime={publishDateTime}
                  tags={tags}
                  content={content}
                  number={number}
                />
              );
            })
        )}
      </div>

      {children}
    </Section>
  );
}
