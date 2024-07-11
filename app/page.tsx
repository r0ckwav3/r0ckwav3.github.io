import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import ResumeEntry from "@/app/ResumeEntry";

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

function Sidebar() {
  let Buttons = [
    ["About", "section-about"],
    ["Experience", "section-experience"],
    ["Education", "section-educatoin"],
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

function SidebarButton({ title, jumpto, selected }: Readonly<{ title: string, jumpto: string, selected: boolean }>){
  let colorclass = selected ? "text-violet-400" : "text-white hover:text-violet-500";
  let classes = "text-xl my-2 font-bold transition duration-200 " + colorclass;
  return (
    <div className={classes}>
      {title}
    </div >
  )
}

function Content() {
  return (
    <div className = "grow overflow-scroll px-16 py-32">
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
      About
    </div>
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
