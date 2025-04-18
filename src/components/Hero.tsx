"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-start gap-6 py-20">
      <h1
        className={cn(
          "text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
        )}
      >
        Hi, I’m <span className="text-cyan-600">Amaechi Ugwu</span>
        <br />
        Full-Stack Developer
      </h1>

      <p className="text-muted-foreground text-base sm:text-lg max-w-xl">
        I build fast, modern, and accessible web applications using technologies
        like
        <span className="text-black font-medium">
          {" "}
          Next.js, Django, .NET
        </span>{" "}
        and more.
      </p>

      <Link href="#projects">
        <Button size="lg" className="gap-2">
          View Projects
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </section>
  );
}
