// --- File: src/components/sections/Experience.tsx ---
import React from 'react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { experienceData } from '@/data/data'; // Import placeholder data
// IMPORTANT: You need to install Shadcn UI components for this to work
// Run: pnpm dlx shadcn-ui@latest add card separator
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust path
// import { Separator } from "@/components/ui/separator"; // Adjust path
import { Briefcase, MapPin } from 'lucide-react';

export function Experience() {
  return (
    <AnimatedSection id="experience" className="container py-16 md:py-24">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Work Experience</h2>
        <p className="text-lg text-muted-foreground">
          My professional journey so far.
        </p>
      </div>
      <div className="relative max-w-3xl mx-auto pl-8">
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border ml-[calc(0.5rem-1px)]"></div>

        {experienceData.map((exp, index) => (
          <AnimatedSection key={index} delay={index * 0.15} tag="div" className="mb-10 relative">
             {/* Timeline Dot */}
            <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-[calc(50%-1px)]"></div>

            <Card className="ml-8 shadow-sm border">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
                <div className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 mt-1">
                   <span className="flex items-center"><Briefcase className="mr-1.5 h-4 w-4" /> {exp.company}</span>
                   <span className="flex items-center"><MapPin className="mr-1.5 h-4 w-4" /> {exp.location}</span>
                </div>
                 <p className="text-xs text-muted-foreground/80 mt-1">{exp.dates}</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}
