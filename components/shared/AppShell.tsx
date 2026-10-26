"use client"

import { usePathname } from "next/dist/client/components/navigation"
import SiteHeader from "./SiteHeader";
 



function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isFullScreen = pathname?.startsWith("/worksapce") || pathname?.startsWith("/shared");

    if(isFullScreen) {
        return (
            <div>{children}</div>
        )
    }

    return(
        <div>
            <SiteHeader/>
            <div className="flex flex-1 flex-col pt-18">{children}</div>
        </div>
    )
}

export default AppShell