import TextImage from "@/components/TextImage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="bg-dashboard h-full">
        <header className="flex gap-5 pt-20 pl-12">
          <Image
            src="/logo.svg"
            alt="Astrix Logo"
            width={48}
            height={39.22}
            priority
          />
          <span className="font-bold text-5xl text-black">Astrix.</span>
        </header>
        <section className="font-bold text-5xl mx-auto w-1/2 text-black py-44 text-left">
          <p>
            WE{" "}
            <Image
              className="object-cover w-[371px] h-14 inline-block animate-[imageResize371_4s_ease-in-out_infinite]"
              src="/firstLine.png"
              alt="firstlineImg"
              width={371}
              height={61}
              priority
            />{" "}
            ORGANIZE THE
          </p>
          <p className="pt-11">
            CONNECTION{" "}
            <Image
              className="object-cover w-[539px] h-14 inline-block animate-[imageResize539_4s_ease-in-out_infinite]"
              src="/secondLine.png"
              alt="secondLineImg"
              width={539}
              height={61}
              priority
            />
          </p>
          <p className="pt-11">
            <Image
              className="object-cover w-[260px] h-14 inline-block animate-[imageResize260_4s_ease-in-out_infinite]"
              src="/thirdLine.png"
              alt="thirdLineImg"
              width={260}
              height={61}
              priority
            />{" "}
            BETWEEN{" "}
            <TextImage alt="thirdLine2Img" url="/thirdLine2.png" width={167} />{" "}
            MUSIC
          </p>
          <p className="pt-11">
            ARTIST{" "}
            <Image
              className="object-cover w-[299px] h-14 inline-block animate-[imageResizeIn299_4s_ease-in_infinite]"
              src="/fourthLine1.png"
              alt="fourthLine1Img"
              width={299}
              height={61}
              priority
            />{" "}
            CULTURE{" "}
            <Image
              className="object-cover w-[137px] h-14 inline-block animate-[imageResizeOut299_4s_ease-out_infinite]"
              src="/fourthLine2.png"
              alt="fourthLine2Img"
              width={137}
              height={61}
              priority
            />
          </p>
          <p className="pt-11">
            <Image
              className="object-cover w-[158px] h-14 inline-block animate-[imageResize158_4s_ease-in-out_infinite]"
              src="/fifthLine1.png"
              alt="fifthLine1Img"
              width={158}
              height={61}
              priority
            />{" "}
            ART{" "}
            <TextImage alt="fifthLine2Img" url="/fifthLine2.png" width={151} />{" "}
            & COLLECTIONS
          </p>
        </section>
      </div>
    </main>
  );
}
