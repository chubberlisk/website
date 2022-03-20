import React from "react";
import Image from "next/image";
import { formatDate } from "../../lib/formatters/date";

export default function PaintingCard({
  title,
  publishDate,
  image: { src, alt },
  tags,
  number,
  headingLevel = 2,
}) {
  const Heading = `h${headingLevel}`;

  return (
    <div className="border-2 border-wtw-yellow p-5">
      <Image
        src={src}
        alt={alt}
        width={250}
        height={250}
        layout="responsive"
        className="w-full object-fill"
        quality={100}
      />

      <div className="pt-5">
        <Heading className="text-lg md:text-xl font-semibold mb-3">
          {title}
        </Heading>

        <p className="text-sm md:text-base w-full">
          Published on{" "}
          <time dateTime={publishDate}>{formatDate(publishDate)}</time>
        </p>

        <div className="text-sm md:text-base w-full mb-0">
          <span className="float-left mr-5">#{number}</span>

          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <span
                className="flex-shrink rounded-lg bg-gradient-to-r from-wtw-yellow to-wtw-orange text-wtw-black px-3 font-black mr-2 mb-1"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
