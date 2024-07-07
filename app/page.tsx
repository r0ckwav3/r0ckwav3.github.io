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
    <div className="flex flex-row my-8 mx-32 p-8 bg-slate-700">
      <div className="w-48 h-72 relative flex-none mr-8">
        <Image
          style={{ objectFit: "cover" }}
          src={aboutjson.image.src}
          alt={aboutjson.image.alt}
          fill
        />
      </div>
      <div className="relative text-xl text-white font-light">
        {aboutjson.short_about.map((e, i) => (
          <div key={i}> {e} </div >)
        )}
        <div className="text-center absolute bottom-0 inset-x-0"> {contact_text} </div>
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
  let objs: Array<React.ReactNode> = [];
  projectsjson.projects.forEach((proj, i) => {
    if(i!=0){
      objs.push(<ProjectSummaryDivider />)
    }
    objs.push(<ProjectSummary project={proj} key={proj.title} />)
  })
  return (
    <div className="flex flex-col items-center">
      {objs}
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
      <div className="ml-8">
        <div className="text-black text-2xl font-bold">
          <a target="_blank" rel="noopener noreferrer" href={project.links[0].url}>{project.title}</a>
        </div>
        <br />
        <div className="text-lg">{project.short_desc}</div>
      </div>
    </div>
  );
}

function ProjectSummaryDivider(){
  return (
    <div className = "h-1 w-3/4 bg-zinc-500">
    </div >
  )
}
