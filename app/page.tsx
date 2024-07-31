import { Playfair_Display } from "next/font/google";
import ResumeEntry from "@/app/ResumeEntry";
import Sidebar from "@/app/Sidebar";
import SectionAbout from "@/app/SectionAbout"

import projectsjson from "@/app/data/projects.json";
import educationjson from "@/app/data/education.json";
import experiencejson from "@/app/data/experience.json"
import skillsjson from "@/app/data/skills.json";

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
    <div className = "grow overflow-scroll px-16 pb-16">
      <SectionAbout />
      <ContentSpacer />
      <SectionEducation />
      <ContentSpacer />
      <SectionExperience />
      <ContentSpacer />
      <SectionProjects />
      <ContentSpacer />
      <SectionSkills />
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
      {projectsjson.contents.map((item,i) =>
        <ResumeEntry key={i} item={item} />
      )}
    </div>
  )
}

function SectionSkills() {
  return (
    <div id="section-skills">
      <SectionHeader title="Skills" />
      {skillsjson.categories.map((item, i) =>{
        return (
          <div className="my-4" key={i}>
            <span className="font-bold">{item.title + ": "}</span>
            <span>{item.skills.join(", ")}</span>
          </div>
        )
      })}
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
