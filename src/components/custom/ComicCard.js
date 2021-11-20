import React from "react";
import Image from "next/image";

const ComicCard = ({ image: { src, alt }, title, publishedDate, tags }) => (
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
      <h2 className="text-base md:text-xl font-semibold">{title}</h2>

      <p className="text-sm md:text-base w-full">
        Published on {publishedDate}
      </p>

      <p className="text-sm md:text-base w-full mb-0">
        <span className="float-left mr-5">#1</span>

        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <span className="flex-shrink rounded-full bg-gradient-to-r from-wtw-yellow to-wtw-orange text-wtw-black px-3 font-black mr-2 mb-1">
              {tag}
            </span>
          ))}
        </div>
      </p>
    </div>
  </div>
);

export default ComicCard;
