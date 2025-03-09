"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useUser, useClerk } from "@clerk/nextjs";
import {
  ChevronDown,
  Menu,
  X,
  User,
  TreeDeciduous,
  LogOut,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Types
type SubItem = { href: string; label: string; subItems?: SubItem[] };
type MenuItem = { href: string; label: string; subItems?: SubItem[] };
type ProfileMenuItem =
  | { href: string; label: string }
  | { label: string; onClick: () => void };

// MobileMenuItem Component
const MobileMenuItem = ({
  item,
  level = 0,
  onClose,
}: {
  item: MenuItem;
  level?: number;
  onClose: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (item.subItems) {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else {
      onClose();
    }
  };

  return (
    <div className="relative">
      {item.subItems ? (
        <>
          <button
            onClick={handleClick}
            className={cn(
              "flex items-center justify-between w-full px-5 py-3 text-sm font-medium",
              "hover:bg-[#F5F5F5] transition-all duration-300",
              pathname === item.href ? "text-[#2E7D32] bg-[#F5F5F5]" : "text-[#333333]",
              level > 0 && "pl-10"
            )}
            aria-expanded={isOpen}
            aria-controls={`submenu-${item.href}`}
          >
            {item.label}
            <ChevronDown
              className={cn(
                "h-4 w-4 text-[#333333] transition-transform duration-300",
                isOpen ? "rotate-180" : ""
              )}
            />
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="bg-[#F5F5F5] overflow-hidden"
                id={`submenu-${item.href}`}
              >
                {item.subItems.map((subItem) => (
                  <MobileMenuItem
                    key={subItem.href}
                    item={subItem}
                    level={level + 1}
                    onClose={onClose}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className={cn(
            "block px-5 py-3 text-sm font-medium",
            pathname === item.href
              ? "text-[#2E7D32] bg-[#F5F5F5]"
              : "text-[#333333] hover:bg-[#F5F5F5]",
            level > 0 && "pl-10"
          )}
        >
          {item.label}
        </Link>
      )}
    </div>
  );
};

// MobileMenuSection Component
const MobileMenuSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="py-2">
    <div className="px-5 py-2 text-xs font-semibold text-[#333333] uppercase tracking-wider bg-gradient-to-r from-[#4CAF50]/20 to-[#2E7D32]/20">
      {title}
    </div>
    {children}
  </div>
);

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  // Removed scroll-related state (prevScrollPos, visible)
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();

  const profileMenuItems: ProfileMenuItem[] = isSignedIn
    ? [
        { href: "/profile/dashboard", label: "Dashboard" },
        { href: "/profile/settings", label: "Settings" },
        { label: "Sign Out", onClick: () => signOut() },
      ]
    : [
        { href: "/sign-in", label: "Sign In" },
        { href: "/sign-up", label: "Sign Up" },
      ];

  // Removed scroll handler useEffect
  // Only keep outside click handler
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Define all menu items
  const networkItems: SubItem[] = [
    { href: "/network/fellowship", label: "UGO Fellowship" },
    { href: "/network/iges", label: "International Green Economy Summit (IGES)" },
    {
      href: "/network/membership",
      label: "Membership",
      subItems: [
        { href: "/network/membership/students-chapter", label: "Students Chapter" },
        { href: "/network/membership/individuals", label: "Individuals" },
      ],
    },
  ];

  const menuItems: MenuItem[] = [
    /* { href: "/", label: "Home" }, */ // Home commented out
    {
      href: "/about",
      label: "About Us",
      subItems: [
        { href: "/about/our-story", label: "Our Story" },
        { href: "/about/our-vision", label: "Our Vision" },
        { href: "/about/our-mission", label: "Our Mission" },
        { href: "/about/what-we-do", label: "What We Do" },
        { href: "/about/our-impact", label: "Our Impact" },
        { href: "/about/leadership", label: "Leadership" },
      ],
    },
    {
      href: "/programmes",
      label: "UGO Programmes",
      subItems: [
        { href: "/programmes/shumani-future-village", label: "Shumani Future Village" },
        {
          href: "/programmes/ugo-sustainability-standard",
          label: "UGO Sustainability Standard",
          subItems: [{ href: "/programmes/green-schools", label: "Green Schools" }],
        },
        { href: "/programmes/ph-omara-ojungu-outreach", label: "PH Omara Ojungu Outreach Program" },
        { href: "/programmes/marubini-wil", label: "Marubini Mugivhi WIL and Placement" },
        { href: "/tree-tracker", label: "Register a Tree" },
      ],
    },
    {
      href: "/fund",
      label: "UGO Fund",
      subItems: [
        { href: "/fund/small-grants", label: "Small Grants for NGOs" },
        { href: "/fund/smmes-capital", label: "SMMEs Start-up Capital" },
        { href: "/fund/student-bursaries", label: "Student Bursaries" },
        { href: "/fund/ground-breakers", label: "Ground Breakers" },
      ],
    },
    {
      href: "/network",
      label: "UGO Network",
      subItems: networkItems,
    },
    {
      href: "/partners",
      label: "Partners",
      subItems: [
        { href: "/partners/stakeholders", label: "Stakeholders" },
        { href: "/partners/affiliations", label: "Accreditation" },
      ],
    },
    { href: "/vacancies", label: "Vacancies" },
  ];

  const desktopMenuItems = menuItems;
  const filteredMenuItems = menuItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#2E7D32]" // Fixed position, no transform
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="UGO Home">
            <Image src="/ugo.png" alt="UGO Logo" width={80} height={40} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" ref={desktopMenuRef}>
            {desktopMenuItems.map((item) => (
              <div key={item.href} className="relative group">
                <motion.button
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  className={cn(
                    "text-[#333333] hover:text-[#2E7D32] text-sm font-medium",
                    "px-3 py-2 rounded-full transition-all duration-300",
                    pathname === item.href ? "text-[#2E7D32] bg-[#F5F5F5]" : "",
                    "flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  )}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  {item.subItems && (
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-[#333333] transition-transform duration-300",
                        activeDropdown === item.label ? "rotate-180" : ""
                      )}
                    />
                  )}
                </motion.button>

                {/* Desktop Dropdown */}
                {item.subItems && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-[#F5F5F5] min-w-[220px] py-2 z-10"
                  >
                    {item.subItems.map((subItem) => (
                      <div key={subItem.href} className="relative">
                        <Link
                          href={subItem.href}
                          onClick={closeMenu}
                          className={cn(
                            "block px-4 py-2 text-sm text-[#333333] hover:bg-[#F5F5F5] hover:text-[#2E7D32]",
                            "transition-all duration-300",
                            pathname === subItem.href ? "text-[#2E7D32] bg-[#F5F5F5]" : ""
                          )}
                        >
                          {subItem.label}
                        </Link>
                        {subItem.subItems && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute left-full top-0 mt-0 ml-2 bg-white rounded-xl shadow-lg border border-[#F5F5F5] min-w-[220px] py-2"
                          >
                            {subItem.subItems.map((nestedItem) => (
                              <Link
                                key={nestedItem.href}
                                href={nestedItem.href}
                                onClick={closeMenu}
                                className={cn(
                                  "block px-4 py-2 text-sm text-[#333333] hover:bg-[#F5F5F5] hover:text-[#2E7D32]",
                                  "transition-all duration-300",
                                  pathname === nestedItem.href ? "text-[#2E7D32] bg-[#F5F5F5]" : ""
                                )}
                              >
                                {nestedItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="https://www.payfast.co.za/donate/go/universalgreeningorganization">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className={cn(
                    "bg-[#4CAF50] hover:bg-[#388E3C] text-white text-sm font-medium",
                    "rounded-full px-6 py-2 border-2 border-[#2E7D32] transition-all duration-300",
                    "hover:border-[#4CAF50] hover:shadow-lg"
                  )}
                >
                  Donate <span className="ml-2">↗</span>
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 inset-0 w-full h-screen bg-white lg:hidden z-50"
            ref={menuRef}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-[#F5F5F5]">
              <Image src="/ugo.png" alt="UGO Logo" width={60} height={30} />
              <button
                onClick={closeMenu}
                className="p-2 text-[#333333] hover:bg-[#F5F5F5] rounded-full"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#333333]" />
                <Input
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full border-[#F5F5F5] focus:border-[#4CAF50] text-sm rounded-full"
                  aria-label="Search menu items"
                />
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="divide-y divide-[#F5F5F5]">
                {filteredMenuItems.length > 0 ? (
                  filteredMenuItems.map((item) => (
                    <MobileMenuItem key={item.href} item={item} onClose={closeMenu} />
                  ))
                ) : (
                  <div className="px-5 py-3 text-sm text-[#333333] opacity-70">
                    No results found
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-[#F5F5F5]">
              <Link
                href="https://www.payfast.co.za/donate/go/universalgreeningorganization"
                onClick={closeMenu}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className={cn(
                      "w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white text-sm font-medium",
                      "rounded-full py-2 border-2 border-[#2E7D32] transition-all duration-300",
                      "hover:border-[#4CAF50] hover:shadow-lg"
                    )}
                  >
                    Support Our Mission <span className="ml-2">↗</span>
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;