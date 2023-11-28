import React from "react";
import Section from "@/components/core/Section";
import WritingCard from "@/components/custom/WritingCard";

export default function WritingsSection({
  writings,
  title,
  children,
  minHeight,
  cardHeadingLevel = 2,
}) {
  const environment = process.env.NODE_ENV;
  const writingsToShow =
    environment === "development"
      ? writings
      : writings.filter((writing) => !writing.metadata.draft);

  return (
    <Section id="writings" minHeight={minHeight}>
      {title}

      <div data-testid="writings">
        {writingsToShow.length === 0 ? (
          <p>There are no existing writings.</p>
        ) : (
          writingsToShow.map(
            ({
              metadata: { title, publishDateTime, tags, slug, number },
              content,
            }) => (
              <WritingCard
                slug={slug}
                title={title}
                key={publishDateTime}
                publishDateTime={publishDateTime}
                tags={tags}
                content={content}
                number={number}
                headingLevel={cardHeadingLevel}
              />
            ),
          )
        )}
      </div>

      {children}
    </Section>
  );
}
