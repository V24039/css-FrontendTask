"use client";

import EventMainPage from "@/components/EventMainPage";
import ImageCarsouel from "@/components/ImageCarsouel";
import TabButton from "@/components/TabButton";
import React from "react";
import EventRoll from "../EventRoll";
import EventDetails from "@/components/EventDetails";

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
          <div className=" w-2/3">
            <EventDetails
              date="04/3/2024 @19:00"
              descp="Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. "
              heading="Event"
              name="Event Name"
              venue="Venue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
