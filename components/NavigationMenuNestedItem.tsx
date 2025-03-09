import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import * as React from 'react'

interface NavigationMenuNestedItemProps {
  href: string
  label: string
  subItems: Array<{ href: string; label: string }>
  closeDropdown: () => void
}

export function NavigationMenuNestedItem({
  href,
  label,
  subItems,
  closeDropdown,
}: NavigationMenuNestedItemProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div 
      className="relative group"
      onMouseLeave={() => setIsOpen(false)}
      role="menuitem"
    >
      <NavigationMenuLink asChild>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-haspopup="true"
          className={cn(
            "block select-none rounded-md p-3 leading-none outline-none",
            "transition-all duration-200 ease-in-out",
            "flex items-center justify-between",
            "hover:bg-green-100 hover:text-green-800 cursor-pointer",
            pathname === href ? 'bg-green-200 text-green-800' : 'text-gray-700'
          )}
          onMouseEnter={() => setIsOpen(true)}
        >
          <span className="text-sm font-medium">{label}</span>
          <ChevronRight 
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              isOpen && "rotate-90"
            )} 
          />
        </div>
      </NavigationMenuLink>
      
      <div 
        className={cn(
          "absolute left-full top-0",
          "transform",
          isOpen ? "block" : "hidden"
        )}
        role="menu"
        aria-hidden={!isOpen}
      >
        <div 
          className={cn(
            "w-56 rounded-lg border bg-white p-3",
            "shadow-lg",
            "border-gray-100/50",
            "relative",
          )}
        >
          <div className="absolute -left-2 top-4 h-4 w-4 rotate-45 bg-white border-l border-t border-gray-100/50" />
          
          <div className="space-y-1">
            {subItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className={cn(
                  "block select-none rounded-md p-3 text-sm leading-none",
                  "outline-none transition-colors duration-200",
                  "hover:bg-green-50 hover:text-green-800",
                  "active:bg-green-100",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500",
                  pathname === item.href 
                    ? 'bg-green-100 text-green-800 font-medium' 
                    : 'text-gray-700'
                )}
                onClick={() => {
                  closeDropdown()
                  setIsOpen(false)
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
