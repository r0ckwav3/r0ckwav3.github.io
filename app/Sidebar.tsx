'use client';

import Image from "next/image";

import aboutjson from "@/app/data/about.json";

export default function Sidebar() {
  let Buttons = [
    ["About", "section-about"],
    ["Education", "section-education"],
    ["Experience", "section-experience"],
    ["Projects", "section-projects"],
  ]

  return (
    <div className = "flex flex-col justify-start items-center m-8 rounded-2xl max-h-screen bg-indigo-900">
      <div className="relative w-32 h-48 m-8">
        <Image
          className="rounded-lg"
          style={{ objectFit: "cover" }}
          src={aboutjson.image.src}
          alt={aboutjson.image.alt}
          fill
        />
      </div>
          {Buttons.map(b => <SidebarButton key={b[0]} title={b[0]} jumpto={b[1]} selected={false} />)}
    </div>
  )
}

function SidebarButton({ title, jumpto, selected }: Readonly<{ title: string, jumpto: string, selected: boolean }>) {
  let colorclass = selected ? "text-violet-400" : "text-white hover:text-violet-500";
  let classes = "text-xl my-2 font-bold transition duration-200 " + colorclass;
  function onclick(){
    document.getElementById(jumpto)?.scrollIntoView({behavior:"smooth"});
  }
  return (
    <button className={classes} onClick={onclick}>
      {title}
    </button >
  )
}
