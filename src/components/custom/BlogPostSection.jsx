import React from "react";
import Section from "../../components/core/Section";
import MarkdownToHtml from "../../components/core/MarkdownToHtml";
import { formatDate } from "../../formatters/date";
import Link from "next/link";
import Image from "next/image";

export default function BlogPostSection({ blogPost }) {
  return (
    <Section minHeight="min-h-screen-90" id={blogPost.metadata.slug}>
      <div className="mb-5 xl:mb-8">
        <Link href="/blog">
          <a>← Back to all blog posts</a>
        </Link>
      </div>

      <div className="lg:w-3/5 mb-5">
        <Image
          src={blogPost.metadata.coverImage}
          alt="hello"
          width={1000}
          height={420}
          layout="intrinsic"
          quality={100}
        />
      </div>

      <span className="block text-xl text-wtw-yellow">
        <time dateTime={blogPost.metadata.publishDate}>
          {formatDate(blogPost.metadata.publishDate)}
        </time>
      </span>

      <h1 className="text-3xl md:text-5xl">{blogPost.metadata.title}</h1>

      <div className="flex flex-wrap mb-3">
        {blogPost.metadata.tags?.map((tag) => (
          <span
            className="flex-shrink rounded-lg bg-gradient-to-r from-wtw-yellow to-wtw-orange text-wtw-black px-3 font-black mr-2 mb-1"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <MarkdownToHtml markdown={blogPost.content} />
    </Section>
  );
}
