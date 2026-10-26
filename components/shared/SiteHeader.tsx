 "use client"

 import Link from "next/link"

function SiteHeader() {
  return (
     <header className="fixed inset-x-0 top-0 z-20 flex h-18 items-center justify-between border-b border-white/6 bg-backgrund/70 backdrop-blur-md md:px-10">
       <Link href={"/"}>My App</Link>

     </header>
  )
}

export default SiteHeader