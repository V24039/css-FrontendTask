import React from "react";
import Image from "next/image";

const TextImage = ({ url, alt, width }) => {

  return (
    <Image
      className={`object-cover w-[${width}px] h-14 inline-block`}
      src={url}
      alt={alt}
      width={width}
      height={61}
      priority
    />
  );
};

export default TextImage;
