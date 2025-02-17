"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Atten. Team (Admin)", href: "/attendance-team" },
  { label: "Org. Details (Admin)", href: "/org-details" },
  { label: "In/Out Logs", href: "/logs" },
  { label: "Finalize Atten.", href: "/finalize" },
  { label: "Manage Employees", href: "/employees" },
  { label: "Final Reports", href: "/reports" },
  { label: "Error Reports", href: "/errors" },
  { label: "Attendance Module", href: "/attendance" },
]

export function NavLinks() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex h-[100px] flex-1 items-center">
      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden p-2 text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop Navigation */}
      <div className="w-full hidden md:flex  h-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={`/`}
            className={cn(
              "flex h-full items-center py-3 px-4 text-sm border border-l-gray-700 border-b-gray-700 text-gray-600 transition-colors bg-gray-200 hover:bg-white",
              pathname === item.href && "bg-white text-gray-900",
              item.label === "Attendance Module" && "ml-auto flex-1 justify-end font-semibold text-[#4263eb]",
              item.label === "Final Reports" && " text-[#4263eb] bg-white"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isOpen && (
        <div className="absolute left-0 top-[60px] z-50 flex w-full flex-col bg-white shadow-md md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`/`}
              className={cn(
                "block px-4 py-3 text-sm border-b text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900",
                pathname === item.href && "bg-gray-100 text-gray-900",
                item.label === "Attendance Module" && "text-[#4263eb]",
                item.label === "Final Reports" && "text-[#4263eb]"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
