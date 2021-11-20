import React from "react";
import Image from "next/image";

const ComicCard = ({
  title,
  publishDate,
  image: { src, alt },
  tags,
  number,
}) => (
  <div className="border-2 border-wtw-yellow p-5">
    <Image
      src={src}
      alt={alt}
      width={250}
      height={250}
      layout="responsive"
      className="w-full object-fill"
    />
    <div className="pt-5">
      <h2 className="text-lg md:text-xl font-semibold mb-3">{title}</h2>

      <p className="text-sm md:text-base w-full">Published on {publishDate}</p>

      <p className="text-sm md:text-base w-full mb-0">
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
      </p>
    </div>
  </div>
);

export default ComicCard;
