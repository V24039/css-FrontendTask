"use client";

import EventMainPage from "@/components/EventMainPage";
import ImageCarsouel from "@/components/ImageCarsouel";
import TabButton from "@/components/TabButton";
import React from "react";

const Events = () => {
  const eventsUrl = [
    { url: "/events1.png" },
    { url: "/collections2.png" },
    { url: "/events3.png" },
    { url: "/collections4.png" },
  ];

  return (
    <div className="bg-black relative h-screen overflow-x-hidden">
      <EventMainPage eventType="events" />
      <div className="z-50 absolute top-28">
        <ImageCarsouel content={eventsUrl} />
        <TabButton />
      </div>
    </div>
  );
};

export default Events;
