"use client";

import EventMainPage from "@/components/EventMainPage";
import ImageCarsouel from "@/components/ImageCarsouel";
import TabButton from "@/components/TabButton";
import React from "react";
import EventRoll from "../EventRoll";
import EventDetails from "@/components/EventDetails";

const Collection = () => {
  const collectionUrl = [
    { album: "Lunar Palace", artist: "Kanye west", url: "/collections1.png" },
    { album: "Lunar Palace", artist: "Kanye west", url: "/collections2.png" },
    { album: "Lunar Palace", artist: "Kanye west", url: "/collections3.png" },
    { album: "Lunar Palace", artist: "Kanye west", url: "/collections4.png" },
  ];

  return (
    <div className="bg-black h-screen">
      <EventMainPage eventType="collection" />
      <div className="absolute top-0">
        <div className="flex z-40 w-screen">
          <div className="overflow-x-hidden pt-28">
            <ImageCarsouel content={collectionUrl} />
            <TabButton />
          </div>
          <div className="bg-violet-400">
            <EventRoll />
          </div>
          <div className="w-2/3">
            <EventDetails
              date="04/3/2024 @19:00"
              descp="Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. "
              heading="Collectible"
              name="Meta Lives"
              venue="Astrix"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
