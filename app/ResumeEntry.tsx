import Image from "next/image";

type Experience = {
  organization: string;
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
        <div className = "w-8 shrink-0 relative">
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
  const im = (
    <div className="relative w-12 h-12 mr-4">
      <Image
        className="rounded-lg"
        style={{ objectFit: "contain"}}
        src={item.image.src}
        alt={item.image.alt}
        fill
      />
    </div>
  );

  const content = (
    <>
      {im}
      <div className="grow">
        <div className="flex flex-row text-lg">
          <span className="grow"> {item.organization} </span>
          <span className="italic"> {item.date} </span>
        </div>
        <div>
          <span className="text-lg font-bold"> {item.title} </span>
        </div>
      </div>
    </>
  );

  if (item.link === undefined) {
    return (<div className="flex flex-row items-center"> {content} </div>);
  } else {
    return (<a target="_blank" rel="noopener noreferrer" href={item.link.url}  className="flex flex-row items-center hover:underline"> {content} </a>);
  }
}
