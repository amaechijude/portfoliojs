'use client';
// --- File: src/components/shared/ProjectCard.tsx ---
import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimization
import Link from 'next/link';
// IMPORTANT: You need to install Shadcn UI components for this to work
// Run: pnpm dlx shadcn-ui@latest add card badge button
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust path
import { Badge } from "@/components/ui/badge"; // Adjust path
import { Button } from "@/components/ui/button"; // Adjust path
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    liveUrl: string | null;
    repoUrl: string | null;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        {/* Project Image */}
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill // Use fill to cover the container
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
            style={{ objectFit: 'cover' }} // Cover the area
            // Add placeholder and blur effect for better loading experience
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" // Tiny transparent blur placeholder
            onError={(e) => {
              // Fallback in case image fails to load
              e.currentTarget.src = `https://placehold.co/600x400/eee/ccc?text=Image+Not+Found`;
            }}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="mb-2 text-xl font-semibold">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </CardDescription>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs rounded-full px-2.5 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end gap-3">
        {/* Links */}
        {project.repoUrl && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.repoUrl} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button size="sm" asChild>
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

