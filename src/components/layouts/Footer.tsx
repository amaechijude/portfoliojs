// --- File: src/components/layout/Footer.tsx ---
import React from 'react';
import Link from 'next/link';
// IMPORTANT: You need to install Shadcn UI components for this to work
// Run: pnpm dlx shadcn-ui@latest add button
import { Button } from '@/components/ui/button'; // Adjust path
import { Github, Linkedin, Mail } from 'lucide-react'; // Icons

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:px-8 md:py-0 border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {currentYear} Your Name. All Rights Reserved. {/* REPLACE Your Name */}
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/yourusername" target="_blank" rel="noreferrer"> {/* REPLACE LINK */}
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"> {/* REPLACE LINK */}
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:youremail@example.com"> {/* REPLACE EMAIL */}
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
