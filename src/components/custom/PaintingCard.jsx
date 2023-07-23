import React from "react";
import Image from "next/image";
import Tag from "@/components//core/Tag";
import DateTime from "@/components//core/DateTime";

export default function PaintingCard({
  id,
  title,
  publishDateTime,
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
          <DateTime dateTime={publishDateTime} />
        </span>
        <Heading className="text-lg md:text-xl font-medium mb-3">
          <span className="mr-2">#{number}</span>
          {title}
        </Heading>

        <div className="w-full mb-0">
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
