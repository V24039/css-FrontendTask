import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ImageCarsouel = ({ content }) => {
  const [current, setCurrentIndex] = useState(0);
  let myInterval;
  const currentTab = usePathname();

  const changeSlide = () => {
    myInterval = setInterval(() => {
      if (current === content.length - 1) { // last image
        setCurrentIndex(0); // to point to the first image
      } else {
        setCurrentIndex((prev) => prev + 1); // updating the current to current image index
      }
    }, 2000);
  };

  useEffect(() => {
    changeSlide();
    return () => clearInterval(myInterval);
  }, [current]);

  return (
      <div className="relative left-96 pb-16">
        <div
          className="flex gap-5 transition ease-out duration-1000"
          style={{ transform: `translateX(-${current * 550}px)` }} // for 1 index translateX(-550px)
        >
          {content?.map((value, index) => (
            <div key={`event-${index}`}>
              <section className={currentTab!=="/collections" ? "invisible"  : undefined}>
                <p className="font-bold text-4xl">{value.album}:</p>
                <p className="font-bold text-2xl">(ft. {value.artist})</p>
              </section>
              <Image
                className={`max-w-[500px] h-[700px] ${
                  index !== current && "brightness-50"
                }`}
                key={`event-${index}`}
                src={value.url}
                alt="Astrix Logo"
                width={564}
                height={700}
                priority
              />
            </div>
          ))}
        </div>
      </div>

  );
};

export default ImageCarsouel;
