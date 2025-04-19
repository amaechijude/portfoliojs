'use client';
// --- File: src/components/sections/Hero.tsx ---
import React from "react";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
// IMPORTANT: You need to install Shadcn UI components for this to work
// Run: pnpm dlx shadcn-ui@latest add button avatar
import { Button } from "@/components/ui/button"; // Adjust path
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Adjust path
import { ArrowDown, Send } from "lucide-react";

export function Hero() {
  // Basic smooth scroll handler (can be moved to a utility function)
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
    <AnimatedSection
      id="home"
      className="container grid min-h-[calc(100vh-3.5rem)] place-items-center py-16 md:py-24 lg:grid-cols-2 lg:gap-16"
    >
      <div className="lg:order-2 flex justify-center">
        {/* Optional: Avatar/Image */}
        <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary/20 shadow-lg">
          {/* Replace with your actual image URL */}
          <AvatarImage
            src="/assets/avatar.jpg"
            alt="Your Name"
          />
          {/* Fallback initials */}
          <AvatarFallback className="text-4xl font-semibold">
            A1
          </AvatarFallback>{" "}
          {/* REPLACE YN */}
        </Avatar>
      </div>
      <div className="text-center lg:text-left lg:order-1 mt-12 lg:mt-0">
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
          Full Stack Developer
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m Amaechi Ugwu
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0">
          I build robust and scalable web applications, specializing in backend
          development with
          <span className="font-semibold text-foreground">
            {" "}
            Django & ASP.NET Core
          </span>{" "}
          and modern frontend frameworks like
          <span className="font-semibold text-foreground">
            {" "}
            React & Next.js
          </span>
          . Let&apos;s create something amazing together.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Button size="lg" asChild>
            <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
              Get In Touch <Send className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
            >
              View Projects <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {/* Optional Resume Download Button */}
          {/*
          <Button size="lg" variant="secondary" asChild>
             <a href="/path/to/your/resume.pdf" download>
                Download Resume <FileText className="ml-2 h-4 w-4" />
             </a>
          </Button>
          */}
        </div>
      </div>
    </AnimatedSection>
  );
}
