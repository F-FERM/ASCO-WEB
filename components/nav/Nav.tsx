"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/Container";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Clients", href: "/clients" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="w-full">
        <Container>
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <Image
              src="/asco_logo.png"
              alt="logo"
              width={140}
              height={40}
              className="object-contain"
            />

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition ${
                      isActive
                        ? "text-yellow-500"
                        : "text-gray-700 hover:text-yellow-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* DESKTOP SEARCH */}
            <div className="hidden md:flex items-center bg-white px-3 py-1.5 w-[200px] border rounded-full">
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-sm bg-transparent"
              />
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden flex items-center"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </Container>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t shadow-md">
            <Container>
              <div className="flex flex-col gap-4 py-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`text-sm font-medium ${
                        isActive ? "text-yellow-500" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* SEARCH */}
                <div className="flex items-center border rounded-full px-3 py-2">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full outline-none text-sm bg-transparent"
                  />
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </Container>
          </div>
        )}
      </nav>
    </header>
  );
}
