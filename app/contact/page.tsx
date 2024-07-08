import Image from "next/image";
import aboutjson from "@/app/data/about.json";
import contactjson from "@/app/data/contact.json";
import projectsjson from "@/app/data/projects.json";

export default function Contact() {
  return (
    <div>
      <ContactBanner />
    </div>
  );
}

function ContactBanner() {
  const contact_text = contactjson.methods.map((e) => e.address);

  return (
    <div className="flex flex-row justify-around w-full">
      <div className="w-1/2 flex flex-row m-8 p-8 bg-slate-700">
        <div className="flex flex-col justify-between items-center w-full text-lg text-white font-light">
          {contactjson.methods.map((e, i) => {
            let addressblock = null;
            if (e.link) {
              addressblock = <a href={e.address} className="underline"> {e.address} </a >
            }else{
              addressblock = <span> {e.address} </span>
            }
            return (
              <div key={i} className="m-2">
                <span className="font-bold">{e.name}</span> - {addressblock}
              </div >
            )
          })}
        </div>
      </div >
    </div>
  );
}
