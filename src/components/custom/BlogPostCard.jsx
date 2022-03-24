import React from "react";
import Link from "next/link";
import { formatDate } from "../../lib/formatters/date";

export default function BlogPostCard({
  title,
  publishDate,
  summary,
  tags,
  headingLevel,
  slug,
}) {
  const Heading = `h${headingLevel}`;

  return (
    <article className="flex flex-col lg:flex-row border-t-2 border-wtw-yellow py-5">
      <div className="basis-1/5">
        <span className="block text-wtw-yellow">
          <time dateTime={publishDate}>{formatDate(publishDate)}</time>
        </span>
      </div>
      <div className="basis-4/5">
        <Heading className="text-xl md:text-2xl font-semibold mb-3">
          {title}
        </Heading>
        <div className="flex flex-wrap mb-3">
          {tags?.map((tag) => (
            <span
              className="flex-shrink rounded-lg bg-gradient-to-r from-wtw-yellow to-wtw-orange text-wtw-black px-3 font-black mr-2 mb-1"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="w-fit xl:w-3/4">{summary}</p>
        <Link href={`blog/${slug}`}>
          <a>
            Read <span className="hidden">{title} blog post</span> →
          </a>
        </Link>
      </div>
    </article>
  );
}
