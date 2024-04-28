import { usePathname } from "next/navigation";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";

const EventDetails = ({ heading, name, venue, date, descp }) => {
  const path = usePathname();

  return (
    <div className="flex flex-col py-10 px-10 gap-4">
      <p className="font-bold text-2xl">
        Explore Youre First<p>{heading}</p>
      </p>
      <p className="font-bold text-6xl pt-24">{name}</p>
      {path === "/events" ? (
        <p className="flex gap-3">
          <span className="flex gap-1 font-bold">
            <IoLocationOutline size="25" /> {venue}
          </span>
          <span className="flex gap-1 font-bold">
            <LuAlarmClock size="25" /> {date}
          </span>
        </p>
      ) : (
        <p className="font-bold">Live in {venue}</p>
      )}
      <p className="font-semibold text-balance">{descp}</p>
    </div>
  );
};

export default EventDetails;
