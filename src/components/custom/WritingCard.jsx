import React from "react";
import { formatDate } from "../../formatters/date";
import MarkdownToHtml from "../core/MarkdownToHtml";

export default function WritingCard({ timestamp, content }) {
  return (
    <article className="flex flex-col lg:flex-row border-t-2 border-wtw-yellow py-5">
      <div className="basis-1/5">
        <span className="block text-wtw-yellow">
          <time dateTime={timestamp}>{formatDate(timestamp)}</time>
        </span>
      </div>
      <div className="basis-4/5">
        <MarkdownToHtml markdown={content} />
      </div>
    </article>
  );
}
