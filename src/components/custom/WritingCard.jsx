import React from "react";
import { formatDate } from "../../formatters/date";
import MarkdownToHtml from "../core/MarkdownToHtml";
import Tag from "../core/Tag";

export default function WritingCard({
  publishDateTime,
  tags,
  content,
  number,
}) {
  return (
    <article className="flex flex-col lg:flex-row border-t-2 border-wtw-yellow py-5">
      <div className="basis-1/5">
        <span className="block text-wtw-yellow">
          <time dateTime={publishDateTime}>{formatDate(publishDateTime)}</time>
        </span>
      </div>
      <div className="basis-4/5">
        <div className="flex flex-wrap mb-3">
          <span className="float-left mr-5 font-medium">#{number}</span>
          {tags?.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <MarkdownToHtml markdown={content} />
      </div>
    </article>
  );
}
