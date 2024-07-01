export default function NavBar(){
  return (
    <div className="min-w-screen h-24 sticky top-0 flex flex-row items-center bg-cyan-600">
      <div className="grow-0 w-8" />
      <NavBarButton name="Home" link = "/" />
      <div className="grow" />
      <NavBarButton name="About Me" link = "/about" />
      <NavBarButton name="Projects" link = "/projects" />
      <NavBarButton name="Research" link = "/research" />
      <NavBarButton name="Contact" link = "/contact" />
      <div className="grow-0 w-8" />
    </div  >
  )
}

function NavBarButton({ name, link }: Readonly<{name: string, link: string}>){
  return (
    <div className="m-4 font-light text-xl text-slate-200">
      <a href={link}> {name} </a >
    </div>
  )
}
