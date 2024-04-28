"use client";

import EventMainPage from "@/components/EventMainPage";
import ImageCarsouel from "@/components/ImageCarsouel";
import TabButton from "@/components/TabButton";
import React from "react";
import EventRoll from "../EventRoll";

const Events = () => {
  const eventsUrl = [
    { url: "/events1.png" },
    { url: "/collections2.png" },
    { url: "/events3.png" },
    { url: "/collections4.png" },
  ];


  return (
    <div className="bg-black h-screen">
      <EventMainPage eventType="collection" />
      <div className="absolute top-0">
        <div className="flex z-40 w-screen">
          <div className="overflow-x-hidden pt-28">
            <ImageCarsouel content={eventsUrl} />
            <TabButton />
          </div>
          <div className="bg-violet-400">
            <EventRoll />
          </div>
          <div className="bg-red-900 w-2/3">
            Event : Oasis Bus tour , JLN Stadium , Delhi, vent : Oasis Bus tour
            , JLN Stadium , Delhi, Collection Live : Meta Lives , live on
            astrix, Collection Live : Meta Lives , live on astri,
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
