import Image from "next/image";

import { Playfair_Display } from "next/font/google";
import ResumeEntry from "@/app/ResumeEntry";
import Sidebar from "@/app/Sidebar";

import aboutjson from "@/app/data/about.json";
import contactjson from "@/app/data/contact.json";
import projectsjson from "@/app/data/projects.json";
import educationjson from "@/app/data/education.json";
import experiencejson from "@/app/data/experience.json"

const pf_display = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="fixed flex flex-row w-screen h-screen">
      <Sidebar />
      <Content />
    </div>
  );
}

function Content() {
  return (
    <div className = "grow overflow-scroll px-16 py-16">
      <SectionAbout />
      <ContentSpacer />
      <SectionEducation />
      <ContentSpacer />
      <SectionExperience />
      <ContentSpacer />
      <SectionProjects />
    </div>
  )
}

function SectionAbout() {
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

function SectionEducation() {
  return (
    <div id="section-education">
      <SectionHeader title="Education" />
      {educationjson.contents.map((item,i) =>
        <ResumeEntry key={i} item={item} />
      )}
    </div>
  )
}

function SectionExperience() {
  return (
    <div id="section-experience">
      <SectionHeader title="Experience" />
      {experiencejson.contents.map((item,i) =>
        <ResumeEntry key={i} item={item} />
      )}
    </div>
  )
}

function SectionProjects() {
  return (
    <div id="section-projects">
      <SectionHeader title="Projects" />
      {projectsjson.contents.map((item,i) =>
        <ResumeEntry key={i} item={item} />
      )}
    </div>
  )
}

function SectionHeader({ title }: Readonly<{title:string}>){
  const classname = pf_display.className + " text-4xl"
  return (
    <div className = {classname}>
      {title}
    </div >
  )
}

function ContentSpacer() {
  return (
    <div className = "mx-auto my-16 w-1/2 h-0.5 bg-black">
    </div >
  )
}
// function HomeBanner() {
//   const contact_text = contactjson.methods.filter(e => e.shortlist).map((e) => e.address).join(" | ");

//   return (
//     <div className="flex flex-row my-8 mx-32 p-8 bg-slate-700">
//       <div className="w-48 h-72 relative flex-none mr-8">
//         <Image
//           style={{ objectFit: "cover" }}
//           src={aboutjson.image.src}
//           alt={aboutjson.image.alt}
//           fill
//         />
//       </div>
//       <div className="relative text-xl text-white font-light">
//         {aboutjson.short_about.map((e, i) => (
//           <div key={i}> {e} </div >)
//         )}
//         <div className="text-center absolute bottom-0 inset-x-0"> {contact_text} </div>
//       </div>
//     </div>
//   );
// }

// type Project = {
//   title: string;
//   image: { src: string; alt: string };
//   short_desc: string;
//   long_desc: string;
//   links: Array<{ name: string; url: string }>;
// };

// function ProjectSummaries() {
//   let objs: Array<React.ReactNode> = [];
//   projectsjson.projects.forEach((proj, i) => {
//     if(i!=0){
//       objs.push(<ProjectSummaryDivider />)
//     }
//     objs.push(<ProjectSummary project={proj} key={proj.title} />)
//   })
//   return (
//     <div className="flex flex-col items-center">
//       {objs}
//     </div>
//   );
// }

// function ProjectSummary({ project }: Readonly<{ project: Project }>) {
//   return (
//     <div className="flex flex-row w-1/2 m-8">
//       <div className="w-48 h-48 relative flex-none">
//         <Image
//           style={{ objectFit: "cover" }}
//           src={project.image.src}
//           alt={project.image.alt}
//           fill
//         />
//       </div>
//       <div className="ml-8">
//         <div className="text-black text-2xl font-bold">
//           <a target="_blank" rel="noopener noreferrer" href={project.links[0].url}>{project.title}</a>
//         </div>
//         <br />
//         <div className="text-lg">{project.short_desc}</div>
//       </div>
//     </div>
//   );
// }

// function ProjectSummaryDivider(){
//   return (
//     <div className = "h-1 w-3/4 bg-zinc-500">
//     </div >
//   )
// }
