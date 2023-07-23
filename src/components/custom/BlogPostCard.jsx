import React from "react";
import Link from "next/link";
import Tag from "@/components/core/Tag";
import DateTime from "@/components/core/DateTime";

export default function BlogPostCard({
  title,
  publishDateTime,
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
          <DateTime dateTime={publishDateTime} />
        </span>
      </div>
      <div className="basis-4/5">
        <Heading className="text-xl md:text-2xl font-medium mb-3">
          {title}
        </Heading>
        <div className="flex flex-wrap mb-3">
          {tags?.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <p className="w-fit xl:w-3/4">{summary}</p>
        <Link href={`/blog/${slug}`} passHref>
          <div data-testid="readBlogPostLink">
            Read <span className="hidden">{title} blog post</span> →
          </div>
        </Link>
      </div>
    </article>
  );
}
