"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/explore", label: "Explore Travelers" },
  { href: "/find-buddy", label: "Find Travel Buddy" },
  { href: "/trips", label: "Trips" },
  { href: "/meetups", label: "Meetups" },
  { href: "/destinations", label: "Destinations" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-linear-to-r from-sky-400 via-cyan-500 to-blue-500 shadow-sm border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-semibold text-white tracking-tight"
            >
              GoNow
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/90 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-sky-600 hover:bg-white/90 transition"
              >
                Login
              </Link>
            </div>

            {/* Mobile Breadcrumb (dropdown) */}
            <div className="md:hidden relative">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/20 transition"
              >
                <Menu className="h-5 w-5" />
              </button>

              {/* Dropdown Panel (NOT modal) */}
              {open && (
                <div className="absolute right-0 top-12 w-64 overflow-hidden rounded-2xl border border-white/20 bg-white shadow-lg">
                  {/* Breadcrumb style header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-sky-50">
                    <span className="text-xs font-semibold text-sky-700">
                      Menu
                    </span>
                  </div>

                  {/* Links */}
                  <div className="py-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/login"
                      className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 transition"
                      onClick={() => setOpen(false)}
                    >
                      Login
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* click outside close (simple) */}
        {open && (
          <button
            aria-label="Close menu backdrop"
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}
