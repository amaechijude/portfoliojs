// --- File: src/components/layout/Navbar.tsx ---
"use client"; // Navbar needs client-side interactivity (theme toggle, potentially mobile menu)

import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
// IMPORTANT: You need to install Shadcn UI components for this to work
// Run: pnpm dlx shadcn-ui@latest add button sheet separator
import { Button } from "@/components/ui/button"; // Adjust path
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"; // Adjust path
import { Separator } from "@/components/ui/separator"; // Adjust path
import { Menu, Code } from "lucide-react"; // Icons

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  // Basic smooth scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo/Brand */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Code className="h-6 w-6 text-primary" /> {/* Use an icon */}
          <span className="font-bold inline-block">Amaechi Ugwu</span>{" "}
          {/* REPLACE Your Name */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions (Desktop) */}
        <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
          {/* Optional: Resume Button */}
          {/* <Button variant="outline" size="sm">Resume</Button> */}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex flex-1 items-center justify-end md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTitle>Menu</SheetTitle>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="block px-2 py-1 text-lg font-medium hover:bg-blue-900 hover:text-white rounded-md"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
                <Separator className="my-4" />
                {/* Optional: Resume Button in Mobile Menu */}
                {/*
                 <SheetClose asChild>
                    <Button variant="outline" className="w-full">Resume</Button>
                 </SheetClose>
                 */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
