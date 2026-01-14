import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import Listprojects from "./Projects"
import { useSelector } from "react-redux"
import type { StateType } from "@/redux/store"
import { CircleUserRound } from 'lucide-react'
export function AppSidebar() {
    const username = useSelector((state: StateType) => state.themeSlice.user.username);
    return (
        <Sidebar className="flex flex-col">

            {/* Header */}
            <div className="h-[60px] flex items-center gap-2 px-2">
                <SidebarTrigger className=" scale-120 relative bottom-px" />
                <div className="h-full flex items-center gap-1 text-xl ">
                    <span className="font-doto font-semibold text-md">DevPen</span>
                    <span className="font-doto font-normal text-md">Compiler</span>
                </div>
            </div>

            <SidebarContent className="">
                <Listprojects />
            </SidebarContent>

            <SidebarFooter className="h-12">
                <div className="text-2xl font-medium font-doto flex h-full items-center justify-center " >
                    <div className="flex items-center gap-2">
                        <CircleUserRound className="scale-100 relative top-px" />
                        <span>
                            {username}
                        </span>
                    </div>
                </div>
            </SidebarFooter>

        </Sidebar>
    )
}