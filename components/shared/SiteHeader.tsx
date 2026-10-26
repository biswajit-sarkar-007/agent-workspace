 "use client"

import Image from "next/image";
 import Link from "next/link"
import { Button } from "../ui/button";

function SiteHeader() {
  const isSignIn =  false;
  const isLandingPage =  true;
  return (
     <header className="fixed inset-x-0 top-0 z-20 flex h-18 items-center justify-between border-b border-white/6 bg-backgrund/70 backdrop-blur-md md:px-10">
       <Link href={ isSignIn && !isLandingPage ? "/dashbord" :"/"} className="flex items-center"> 
       <Image src="/brand/logo-navbar-dark.png" alt="Outpost" width={314} height={160} className="h-9 w-auto" priority /> 
       </Link>

       {isLandingPage && (
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link href={"#product"}
          className="transition-colors hover:text-foreground">
            Product

          </Link>
           <Link href={"#how-it-works"}
          className="transition-colors hover:text-foreground">
             How It Works

          </Link>
           <Link href={"#pricing"}
          className="transition-colors hover:text-foreground">
            Prcing

          </Link>
        </nav>
       )}

       <div className="flex items-center gap-3">
        <Button asChild variant={"ghost"} size={"sm"}>
          <Link href={"/sign-in"}>Sign In</Link>
        </Button>
       </div>


     </header>
  )
}

export default SiteHeader