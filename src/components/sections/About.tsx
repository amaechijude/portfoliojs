'use client';
// --- File: src/components/sections/About.tsx ---
import React from "react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { skillsData } from "@/data/data"; // Import skills data
// IMPORTANT: You need to install Shadcn UI components for this to work
// Run: pnpm dlx shadcn-ui@latest add badge
import { Badge } from "@/components/ui/badge"; // Adjust path

export function About() {
  return (
    <AnimatedSection id="about" className="container py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          About Me
        </h2>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          I&apos;m a passionate Full Stack Developer with a knack for solving complex
          problems and building efficient, user-friendly applications. My
          experience spans across backend technologies like Python (Django) and
          C# (ASP.NET Core), frontend frameworks like React and Next.js, and
          DevOps practices including Docker and cloud deployment.
        </p>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          I thrive in collaborative environments and enjoy learning new
          technologies to continuously improve my skillset. Currently based in
          Abuja, Nigeria. {/* Update location if needed */}
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold tracking-tight text-center mb-8">
          My Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skillsData.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-sm px-4 py-2 rounded-full shadow-sm"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
