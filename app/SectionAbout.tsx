import Image from "next/image";

import aboutjson from "@/app/data/about.json";
import contactjson from "@/app/data/contact.json";

export default function SectionAbout() {
  return (
    <div id="section-about">
      <div className = "text-4xl font-black my-4">
        {"Hi, I'm"}
        <span className="text-6xl text-indigo-800"> Peter Vandervelde </span>
        !
      </div>
      <div className = "text-lg font-semibold my-4 text-neutral-400">
        {contactjson.text.map((e, i) => e.address).join(" | ")}
      </div>
      <div className="text-lg my-8">
        {aboutjson.about.map((item, i) => (<div className="my-2" key={i}> {item} </div>))}
      </div>
      <ContactIcons/>
    </div>
  )
}

type ContactLink = {
  name: string;
  url: string;
  image: { src: string; alt: string };
};

function ContactIcons() {
  return (
    <div className="flex flex-row">
      {contactjson.links.map((e, i) =>
        <ContactIcon key={i} link={e}/>
      )}
    </div>
  )
}

function ContactIcon({ link }: Readonly<{link: ContactLink}>){
  return (
    <a target="_blank" rel="noopener noreferrer" href={link.url}>
      <div className="relative w-12 h-12 mr-4">
        <Image
          className="rounded-lg"
          style={{ objectFit: "contain"}}
          src={link.image.src}
          alt={link.image.alt}
          fill
        />
      </div>
    </a>
  )
}
