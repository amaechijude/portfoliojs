'use client';
// --- File: src/components/sections/Projects.tsx ---
import React from 'react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { projectsData } from '@/data/data'; // Import placeholder data

export function Projects() {
  return (
    <AnimatedSection id="projects" className="container py-16 md:py-24 bg-muted/40">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">My Projects</h2>
        <p className="text-lg text-muted-foreground">
          Here are some of the projects I&apos;ve worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          // Add a slight delay to each card animation for a staggered effect
          <AnimatedSection key={project.title} delay={index * 0.1} tag="div">
             <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}
