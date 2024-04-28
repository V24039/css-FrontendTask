import React from "react";
import Image from "next/image";

const EventMainPage = ({ eventType }) => {
  return (
    <div className="z-0 relative">
      <header className="flex gap-5">
        <Image
          src="/logoLight.svg"
          alt="Astrix Logo"
          width={48}
          height={39.22}
          priority
        />
        <span className="font-bold text-5xl text-amber-300">Astrix.</span>
      </header>
      <section className="py-11 px-10">
        <div className="font-bold text-9xl text-white opacity-20">
          <p>ASTRIX</p>
          <p className="pt-28">{eventType.toUpperCase()}</p>
        </div>
      </section>
    </div>
  );
};

export default EventMainPage;
