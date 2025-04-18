"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme-toggle";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className={cn(
            "text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
          )}
        >
          MyPortfolio
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
