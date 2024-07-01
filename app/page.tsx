import Image from "next/image";
import aboutjson from "@/app/data/about.json";
import contactjson from "@/app/data/contact.json";
import projectsjson from "@/app/data/projects.json";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <ProjectSummaries />
    </div>
  );
}

function HomeBanner() {
  const contact_text = contactjson.methods.map((e) => e.address).join(" | ");

  return (
    <div className="flex flex-row m-8 p-8 bg-slate-700">
      <div className="w-48 h-72 relative flex-none mr-8">
        <Image
          style={{ objectFit: "cover" }}
          src={aboutjson.image.src}
          alt={aboutjson.image.alt}
          fill
        />
      </div>
      <div className="flex flex-col place-content-between text-lg text-white font-light">
        <div> {aboutjson.short_about} </div>
        <div className="text-center"> {contact_text} </div>
      </div>
    </div>
  );
}

type Project = {
  title: string;
  image: { src: string; alt: string };
  short_desc: string;
  long_desc: string;
  links: Array<{ name: string; url: string }>;
};

function ProjectSummaries() {
  return (
    <div className="flex flex-col items-center">
      {projectsjson.projects.map((proj, i) => (
        <ProjectSummary project={proj} key={proj.title} />
      ))}
    </div>
  );
}

function ProjectSummary({ project }: Readonly<{ project: Project }>) {
  return (
    <div className="flex flex-row w-1/2 m-8">
      <div className="w-48 h-48 relative flex-none">
        <Image
          style={{ objectFit: "cover" }}
          src={project.image.src}
          alt={project.image.alt}
          fill
        />
      </div>
      <div className="m-8">
        <div className="text-black text-2xl font-bold">
          <a href={project.links[0].url}>{project.title}</a>
        </div>
        <br />
        <div className="text-lg">{project.short_desc}</div>
      </div>
    </div>
  );
}
