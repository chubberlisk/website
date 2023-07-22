import React from "react";
import { formatDate } from "../../formatters/date";
import MarkdownToHtml from "../core/MarkdownToHtml";

export default function WritingCard({ timestamp, tags, content }) {
  return (
    <article className="flex flex-col lg:flex-row border-t-2 border-wtw-yellow py-5">
      <div className="basis-1/5">
        <span className="block text-wtw-yellow">
          <time dateTime={timestamp}>{formatDate(timestamp)}</time>
        </span>
      </div>
      <div className="basis-4/5">
        <div className="flex flex-wrap mb-3">
          {tags?.map((tag) => (
            <span
              className="flex-shrink rounded-lg bg-gradient-to-r from-wtw-yellow to-wtw-orange text-wtw-black px-3 font-bold mr-2 mb-1"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <MarkdownToHtml markdown={content} />
      </div>
    </article>
  );
}
