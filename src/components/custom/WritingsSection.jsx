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

      {writingsToShow.length == 0 ? (
        <p>There are no existing writings.</p>
      ) : (
        writingsToShow.map((writing) => (
          <WritingCard
            key={writing.metadata.timestamp}
            timestamp={writing.metadata.timestamp}
            content={writing.content}
          />
        ))
      )}

      {children}
    </Section>
  );
}
