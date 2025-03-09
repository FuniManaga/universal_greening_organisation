"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Settings, 
  TreeDeciduous, 
  Users, 
  LogOut,
  Menu,
  X 
} from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  {
    title: "Dashboard",
    href: "/profile/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "My Trees",
    href: "/profile/trees",
    icon: TreeDeciduous
  },
  {
    title: "Network",
    href: "/profile/network",
    icon: Users
  },
  {
    title: "Settings",
    href: "/profile/settings",
    icon: Settings
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        className="fixed top-4 left-4 lg:hidden z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200",
        "transform transition-transform duration-300 ease-in-out lg:transform-none",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Logo Section */}
        <div className="p-4 border-b">
          <Link 
            href="/" 
            className="flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/ugo.png"
              alt="UGO Logo"
              width={120}
              height={60}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex flex-col p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg",
                  "transition-colors duration-200",
                  pathname === item.href
                    ? "bg-[#00703C]/5 text-[#00703C]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </Link>
            )
          })}
        </div>

        {/* Sign Out Button */}
        <div className="p-4 border-t mt-auto">
          <Link
            href="/auth/signout"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg",
              "text-red-600 hover:bg-red-50 transition-colors duration-200"
            )}
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </Link>
        </div>
      </div>

      {/* Main Content Wrapper - Add this to your layout */}
      <div className="lg:pl-64">
        {/* Your page content goes here */}
      </div>
    </>
  )
}