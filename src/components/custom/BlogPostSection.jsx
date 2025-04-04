import React from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/core/Section";
import MarkdownToHtml from "@/components/core/MarkdownToHtml";
import DateTime from "@/components/core/DateTime";

export default function BlogPostSection({ blogPost, padding }) {
  return (
    <Section
      minHeight="min-h-[90vh]"
      id={blogPost.metadata.slug}
      padding={padding}
    >
      <div className="mb-5 xl:mb-8">
        <Link href="/blog">← Back to all blog posts</Link>
      </div>
      <div className="lg:w-3/5 mb-5">
        <Image
          src={blogPost.metadata.coverImage}
          alt="hello"
          width={1000}
          height={420}
          quality={100}
        />
      </div>
      <span className="block text-xl text-wtw-yellow">
        <DateTime dateTime={blogPost.metadata.publishDateTime} />
      </span>
      <h1 className="text-3xl md:text-5xl">{blogPost.metadata.title}</h1>
      <div className="flex flex-wrap mb-3">
        {blogPost.metadata.tags?.map((tag) => (
          <span
            className="flex-shrink rounded-lg bg-gradient-to-r from-wtw-yellow to-wtw-orange text-wtw-black px-3 font-medium mr-2 mb-1"
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
