import Image from "next/image";
import aboutjson from "@/app/data/about.json";

export default function Home() {
  return (
    <HomeBanner />
  );
}

function HomeBanner() {
  return (
    <div className="flex flex-row m-8 p-8 bg-slate-700">
      <div className="flex-none mr-8">
        <Image
          src={aboutjson.image.src}
          alt={aboutjson.image.alt}
          width={200}
          height={300}
        />
      </div >
      <div className="flex place-content-between text-lg text-white font-light">
        <div> {aboutjson.short_about} </div>
        <div> contact </div>
      </div>
    </div >
  )
}
