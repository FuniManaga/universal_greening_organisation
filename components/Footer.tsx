"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

const Footer = () => {
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    const result = await subscribeToNewsletter(formData);

    if (result.error) {
      setMessage({ text: result.error, type: "error" });
    } else if (result.success) {
      setMessage({ text: result.success, type: "success" });
      formRef.current?.reset();
    }

    setTimeout(() => setMessage(null), 5000);
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "About",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Impact", href: "/impact" },
        { label: "Team", href: "/team" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Programmes",
      links: [
        { label: "Shumani Future Village", href: "/programmes/shumani-future-village" },
        { label: "PH Omara Ojungu", href: "/programmes/ph-omara-ojungu-outreach" },
        { label: "Marubini WIL", href: "/programmes/marubini-wil" },
        { label: "Ground Breakers", href: "/programmes/ground-breakers" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Get in Touch", href: "/contact" },
        { label: "Support", href: "/support" },
        { label: "Partners", href: "/partners" },
        { label: "Affiliations", href: "/partners/affiliations" },
      ],
    },
  ];

  return (
    <footer className="bg-white text-[#333333]">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Newsletter */}
            <div className="lg:col-span-5 space-y-6">
              <div className="max-w-md">
                <h3 className="text-xl font-semibold text-[#2E7D32] mb-4">
                  Stay Updated
                </h3>
                <p className="text-[#333333]/80 text-base mb-6">
                  Get the latest updates on our environmental initiatives and community projects.
                </p>
                <form ref={formRef} action={handleSubmit} className="space-y-4">
                  <div className="flex items-center rounded-full shadow-sm border border-[#F5F5F5] overflow-hidden">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 min-w-0 px-4 py-3 text-sm text-[#333333] bg-white border-0 focus:ring-2 focus:ring-[#4CAF50] focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 text-sm font-medium text-white bg-[#4CAF50] hover:bg-[#388E3C] border-0 transition-all duration-300"
                    >
                      Subscribe
                    </button>
                  </div>
                  {message && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`text-sm ${
                        message.type === "success" ? "text-[#4CAF50]" : "text-red-600"
                      }`}
                    >
                      {message.text}
                    </motion.p>
                  )}
                </form>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                {footerLinks.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-lg font-semibold text-[#2E7D32] mb-6">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-[#333333]/80 hover:text-[#2E7D32] hover:underline transition-all duration-200 text-sm"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-[#2E7D32]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            <p className="text-sm text-[#333333]/80">
              © {currentYear} Universal Greening Organisation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm text-[#333333]/80 hover:text-[#2E7D32] hover:underline transition-all duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-[#333333]/80 hover:text-[#2E7D32] hover:underline transition-all duration-200"
              >
                Terms of Use
              </Link>
              {/* Optional Social Links (commented out) */}
              {/* <div className="flex gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#333333]/80 hover:text-[#2E7D32] transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#333333]/80 hover:text-[#2E7D32] transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;