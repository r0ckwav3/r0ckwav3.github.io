import Image from "next/image";

type Experience = {
  organization?: string;
  title: string;
  image: { src: string; alt: string };
  date?: string;
  desc: string[];
  coursework?: string[];
  link?: { name: string; url: string };
};

export default function ResumeEntry({ item }: Readonly<{item: Experience}>){
  return (
    <div className="w-full my-8">
      <ResumeEntryHeader item={item} />
      <div className = "flex flex-row">
        <div className = "w-8 relative">
          <div className = "w-0.5 absolute inset-y-2 bg-indigo-500" />
        </div>
        <div className = "grow">
          <div className = "my-4">
            {item.desc.map((item, i) => (<div className="my-2" key={i}> {item} </div>))}
          </div>
          { (item.coursework === undefined || item.coursework?.length === 0) ? "" :
            (<div className = "my-4">
              <span className = "font-bold"> Coursework: </span>
              <span className = "italic"> { item.coursework?.join(", ") } </span>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

function ResumeEntryHeader({ item }: Readonly<{ item: Experience }>) {
  if (item.organization === undefined) {
    return (
      <div className="flex flex-row text-lg">
        <span className = "grow"> { item.title } </span>
        <span className = "italic"> { item.date } </span>
      </div>
    )
  } else {
    return (
      <>
        <div className="flex flex-row text-lg">
          <span className = "grow"> { item.organization } </span>
          <span className = "italic"> { item.date } </span>
        </div>
        <div>
          <span className = "text-lg font-bold"> { item.title } </span>
        </div>
      </>
    )
  }

}
