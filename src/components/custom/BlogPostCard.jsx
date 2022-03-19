import React from "react";
import { formatDate } from "../../lib/formatters/date";

const BlogPostCard = ({ title, publishDate, summary, tags }) => {
  return (
    <article className="flex flex-col lg:flex-row border-t-2 border-wtw-yellow py-5">
      <div className="basis-1/5">{formatDate(publishDate)}</div>
      <div className="basis-4/5">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">{title}</h2>
        <div className="flex flex-wrap mb-3">
          {tags.map((tag) => (
            <span
              className="flex-shrink rounded-lg bg-gradient-to-r from-wtw-yellow to-wtw-orange text-wtw-black px-3 font-black mr-2 mb-1"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="w-fit xl:w-3/4">{summary}</p>
      </div>
    </article>
  );
};

export default BlogPostCard;
