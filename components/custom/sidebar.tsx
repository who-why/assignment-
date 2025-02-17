"use client"
import { Building2, Calendar, LogOut, Briefcase, LayoutDashboard } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import User from '../../public/images/user.jpeg'


export function Sidebar() {
  const navItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Calendar",
      icon: Calendar,
    },
    {
      title: "Institution",
      icon: Building2,
    },
    {
      title: "Work",
      icon: Briefcase,
    },
  ]

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-screen w-16 flex-col items-center bg-[#4338ca] py-4">
        
        <Button variant="ghost" size="icon" className="mb-4 text-xl font-bold text-white hover:bg-indigo-700">
          P
        </Button>

       
        <div className="mb-8 mt-2 border-1 border-gray-100">
          <Tooltip>
            <TooltipTrigger asChild>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage
                  src={User.src}
                  alt="Profile"
                />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
            </TooltipTrigger>
            <TooltipContent side="right">Profile</TooltipContent>
          </Tooltip>
        </div>

        
        <nav className="flex flex-1 flex-col items-center gap-4">
          {navItems.map((item) => (
            <Tooltip key={item.title}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-700">
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.title}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">{item.title}</TooltipContent>
            </Tooltip>
          ))}
        </nav>

        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="mt-auto text-white hover:bg-indigo-700">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Logout</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

