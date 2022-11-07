import React from "react";
import Image from "next/image";
import { formatDate } from "../../formatters/date";

export default function PaintingCard({
  id,
  title,
  publishDate,
  image: { src, alt },
  tags,
  number,
  headingLevel = 2,
}) {
  const Heading = `h${headingLevel}`;

  return (
    <div id={id} className="border-2 border-wtw-yellow p-5">
      <Image
        src={src}
        alt={alt}
        className="w-full object-fill"
        width={1080}
        height={1080}
      />

      <div className="pt-5">
        <span className="block text-wtw-yellow">
          <time dateTime={publishDate}>{formatDate(publishDate)}</time>
        </span>
        <Heading className="text-lg md:text-xl font-semibold mb-3">
          {title}
        </Heading>

        <div className="w-full mb-0">
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
