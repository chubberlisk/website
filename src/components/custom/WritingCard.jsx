import React from "react";
import MarkdownToHtml from "@/components//core/MarkdownToHtml";
import Tag from "@/components//core/Tag";
import DateTime from "@/components//core/DateTime";

export default function WritingCard({
  id,
  title,
  publishDateTime,
  tags,
  content,
  number,
  headingLevel = 2,
}) {
  const Heading = `h${headingLevel}`;

  return (
    <article
      id={id}
      className="flex flex-col lg:flex-row border-t-2 border-wtw-yellow py-5"
    >
      <div className="basis-1/5">
        <span className="block text-wtw-yellow">
          <DateTime dateTime={publishDateTime} />
        </span>
      </div>
      <div className="basis-4/5">
        <Heading className="text-lg md:text-xl font-medium mb-3">
          <span className="mr-2">#{number}</span>
          {title}
        </Heading>
        <div className="flex flex-wrap mb-3">
          {tags?.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <MarkdownToHtml markdown={content} />
      </div>
    </article>
  );
}
