import React from "react";

const EventRoll = ({ rollText }) => {
  const displayText = rollText.join(" * ");
  return (
    <div className="px-12 h-screen overflow-hidden">
      <p
        className="font-bold text-4xl text-black text-nowrap animate-[textScroll_10s_linear_infinite]"
        style={{ "writing-mode": "vertical-lr" }}
      >
        {displayText}
      </p>
    </div>
  );
};

export default EventRoll;
