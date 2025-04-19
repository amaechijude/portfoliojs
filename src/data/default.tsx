// // --- File: src/lib/utils.ts ---
// // Required by Shadcn/UI for merging Tailwind classes
// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }


// // --- File: src/lib/data.ts ---
// // Placeholder data for projects and experience. Replace with your own.

// export const projectsData = [
//   {
//     title: "Project Alpha",
//     description: "A full-stack web application using Django Rest Framework and React.",
//     tags: ["Django", "React", "Python", "Docker", "PostgreSQL"],
//     imageUrl: "https://placehold.co/600x400/222/eee?text=Project+Alpha", // Replace with actual image path/URL
//     liveUrl: "#", // Replace with live demo URL
//     repoUrl: "#", // Replace with GitHub repo URL
//   },
//   {
//     title: "Service Hub API",
//     description: "A robust backend API built with ASP.NET Core Web API for managing services.",
//     tags: ["ASP.NET Core", "C#", ".NET", "SQL Server", "Azure"],
//     imageUrl: "https://placehold.co/600x400/333/eee?text=Service+Hub+API", // Replace with actual image path/URL
//     liveUrl: null, // No live demo for this API
//     repoUrl: "#", // Replace with GitHub repo URL
//   },
//   {
//     title: "NextGen Dashboard",
//     description: "Interactive dashboard built with Next.js, TypeScript, and Tailwind CSS.",
//     tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
//     imageUrl: "https://placehold.co/600x400/444/eee?text=NextGen+Dashboard", // Replace with actual image path/URL
//     liveUrl: "#", // Replace with live demo URL
//     repoUrl: "#", // Replace with GitHub repo URL
//   },
// ];

// export const experienceData = [
//   {
//     company: "Tech Solutions Inc.",
//     location: "Lagos, Nigeria",
//     title: "Senior Full Stack Developer",
//     dates: "Jan 2021 - Present",
//     description: [
//       "Led development of key features for client projects using Python/Django and React/Next.js.",
//       "Designed and implemented RESTful APIs with ASP.NET Core for internal tools.",
//       "Managed containerization and deployment using Docker and Kubernetes.",
//       "Mentored junior developers and conducted code reviews.",
//     ],
//   },
//   {
//     company: "Innovate Labs",
//     location: "Abuja, Nigeria",
//     title: "Software Engineer",
//     dates: "Jun 2018 - Dec 2020",
//     description: [
//       "Developed and maintained backend services using Python and C#.",
//       "Contributed to frontend development using JavaScript frameworks.",
//       "Worked in an Agile environment, participating in sprints and planning.",
//       "Automated build and deployment processes.",
//     ],
//   },
// ];

// export const skillsData = [
//   "Python", "C#", "JavaScript", "TypeScript",
//   "Django", "ASP.NET Core", "Node.js",
//   "React", "Next.js", "HTML", "CSS",
//   "Tailwind CSS", "SQL", "PostgreSQL", "SQL Server",
//   "Docker", "Git", "Azure", "Vercel", "Linux"
// ];


// // --- File: src/components/providers/theme-provider.tsx ---
// "use client";

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   // Ensure the component mounts on the client before rendering
//   const [isMounted, setIsMounted] = React.useState(false);

//   React.useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     // Avoid rendering mismatch during server/client hydration
//     // You could return null or a skeleton loader here
//     return <>{children}</>;
//   }

//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }


// // --- File: src/components/shared/ThemeToggle.tsx ---
// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react"; // Assuming lucide-react is installed
// import { useTheme } from "next-themes";

// // IMPORTANT: You need to install Shadcn UI components for this to work
// // Run: pnpm dlx shadcn-ui@latest add button dropdown-menu
// import { Button } from "@/components/ui/button"; // Adjust path if needed
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"; // Adjust path if needed

// export function ThemeToggle() {
//   const { setTheme } = useTheme();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon" className="rounded-full">
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }


// // --- File: src/components/layout/Navbar.tsx ---
// "use client"; // Navbar needs client-side interactivity (theme toggle, potentially mobile menu)

// import React from 'react';
// import Link from 'next/link';
// import { ThemeToggle } from '@/components/shared/ThemeToggle';
// // IMPORTANT: You need to install Shadcn UI components for this to work
// // Run: pnpm dlx shadcn-ui@latest add button sheet separator
// import { Button } from '@/components/ui/button'; // Adjust path
// import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Adjust path
// import { Separator } from '@/components/ui/separator'; // Adjust path
// import { Menu, Code } from 'lucide-react'; // Icons

// const navLinks = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Projects", href: "#projects" },
//   { name: "Experience", href: "#experience" },
//   { name: "Contact", href: "#contact" },
// ];

// export function Navbar() {
//   // Basic smooth scroll handler
//   const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-14 max-w-screen-2xl items-center">
//         {/* Logo/Brand */}
//         <Link href="/" className="mr-6 flex items-center space-x-2">
//           <Code className="h-6 w-6 text-primary" /> {/* Use an icon */}
//           <span className="font-bold inline-block">Your Name</span> {/* REPLACE Your Name */}
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={(e) => handleScroll(e, link.href)}
//               className="transition-colors hover:text-foreground/80 text-foreground/60"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Right side actions (Desktop) */}
//         <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
//            {/* Optional: Resume Button */}
//            {/* <Button variant="outline" size="sm">Resume</Button> */}
//           <ThemeToggle />
//         </div>

//         {/* Mobile Navigation Trigger */}
//         <div className="flex flex-1 items-center justify-end md:hidden">
//           <ThemeToggle />
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="ml-2">
//                 <Menu className="h-5 w-5" />
//                 <span className="sr-only">Toggle Menu</span>
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//               <nav className="flex flex-col gap-4 mt-8">
//                 {navLinks.map((link) => (
//                   <SheetClose asChild key={link.name}>
//                     <Link
//                       href={link.href}
//                       onClick={(e) => handleScroll(e, link.href)}
//                       className="block px-2 py-1 text-lg font-medium hover:bg-accent rounded-md"
//                     >
//                       {link.name}
//                     </Link>
//                   </SheetClose>
//                 ))}
//                  <Separator className="my-4" />
//                  {/* Optional: Resume Button in Mobile Menu */}
//                  {/*
//                  <SheetClose asChild>
//                     <Button variant="outline" className="w-full">Resume</Button>
//                  </SheetClose>
//                  */}
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }


// // --- File: src/components/layout/Footer.tsx ---
// import React from 'react';
// import Link from 'next/link';
// // IMPORTANT: You need to install Shadcn UI components for this to work
// // Run: pnpm dlx shadcn-ui@latest add button
// import { Button } from '@/components/ui/button'; // Adjust path
// import { Github, Linkedin, Mail } from 'lucide-react'; // Icons

// export function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="py-6 md:px-8 md:py-0 border-t bg-background">
//       <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
//         <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
//           © {currentYear} Your Name. All Rights Reserved. {/* REPLACE Your Name */}
//         </p>
//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon" asChild>
//             <Link href="https://github.com/yourusername" target="_blank" rel="noreferrer"> {/* REPLACE LINK */}
//               <Github className="h-5 w-5" />
//               <span className="sr-only">GitHub</span>
//             </Link>
//           </Button>
//           <Button variant="ghost" size="icon" asChild>
//             <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"> {/* REPLACE LINK */}
//               <Linkedin className="h-5 w-5" />
//               <span className="sr-only">LinkedIn</span>
//             </Link>
//           </Button>
//           <Button variant="ghost" size="icon" asChild>
//             <Link href="mailto:youremail@example.com"> {/* REPLACE EMAIL */}
//               <Mail className="h-5 w-5" />
//               <span className="sr-only">Email</span>
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </footer>
//   );
// }


// // --- File: src/components/shared/AnimatedSection.tsx ---
// "use client"; // Needs client-side Intersection Observer and Framer Motion

// import React, { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// interface AnimatedSectionProps {
//   children: React.ReactNode;
//   className?: string;
//   id?: string;
//   delay?: number;
//   tag?: keyof JSX.IntrinsicElements; // Allow specifying the HTML tag (e.g., 'section', 'div')
// }

// export function AnimatedSection({
//   children,
//   className,
//   id,
//   delay = 0,
//   tag = 'section' // Default to 'section'
// }: AnimatedSectionProps) {
//   const ref = useRef(null);
//   // Trigger animation only once when it comes into view
//   const isInView = useInView(ref, { once: true, amount: 0.2 }); // Adjust amount as needed

//   const MotionComponent = motion[tag]; // Dynamically select the motion component based on the tag

//   return (
//     <MotionComponent
//       ref={ref}
//       id={id}
//       className={className}
//       initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
//       animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and original position
//       transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} // Animation timing
//     >
//       {children}
//     </MotionComponent>
//   );
// }


// // --- File: src/components/sections/Hero.tsx ---
// import React from 'react';
// import Link from 'next/link';
// import { AnimatedSection } from '@/components/shared/AnimatedSection';
// // IMPORTANT: You need to install Shadcn UI components for this to work
// // Run: pnpm dlx shadcn-ui@latest add button avatar
// import { Button } from '@/components/ui/button'; // Adjust path
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Adjust path
// import { ArrowDown, FileText, Send } from 'lucide-react';

// export function Hero() {
//   // Basic smooth scroll handler (can be moved to a utility function)
//   const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
//     e.preventDefault();
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <AnimatedSection id="home" className="container grid min-h-[calc(100vh-3.5rem)] place-items-center py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
//       <div className="lg:order-2 flex justify-center">
//         {/* Optional: Avatar/Image */}
//         <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary/20 shadow-lg">
//            {/* Replace with your actual image URL */}
//           <AvatarImage src="https://placehold.co/256x256/333/eee?text=YN" alt="Your Name" />
//           {/* Fallback initials */}
//           <AvatarFallback className="text-4xl font-semibold">YN</AvatarFallback> {/* REPLACE YN */}
//         </Avatar>
//       </div>
//       <div className="text-center lg:text-left lg:order-1 mt-12 lg:mt-0">
//         <span className="text-primary font-semibold tracking-wider uppercase text-sm">
//           Full Stack Developer
//         </span>
//         <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
//           Hi, I'm Your Name {/* REPLACE Your Name */}
//         </h1>
//         <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-xl mx-auto lg:mx-0">
//           I build robust and scalable web applications, specializing in backend development with
//           <span className="font-semibold text-foreground"> Django & ASP.NET Core</span> and modern frontend frameworks like
//           <span className="font-semibold text-foreground"> React & Next.js</span>. Let's create something amazing together.
//         </p>
//         <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
//           <Button size="lg" asChild>
//             <Link href="#contact" onClick={(e) => handleScroll(e, '#contact')}>
//               Get In Touch <Send className="ml-2 h-4 w-4" />
//             </Link>
//           </Button>
//           <Button size="lg" variant="outline" asChild>
//             <Link href="#projects" onClick={(e) => handleScroll(e, '#projects')}>
//               View Projects <ArrowDown className="ml-2 h-4 w-4" />
//             </Link>
//           </Button>
//           {/* Optional Resume Download Button */}
//           {/*
//           <Button size="lg" variant="secondary" asChild>
//              <a href="/path/to/your/resume.pdf" download>
//                 Download Resume <FileText className="ml-2 h-4 w-4" />
//              </a>
//           </Button>
//           */}
//         </div>
//       </div>
//     </AnimatedSection>
//   );
// }


// // --- File: src/components/sections/About.tsx ---
// import React from 'react';
// import { AnimatedSection } from '@/components/shared/AnimatedSection';
// import { skillsData } from '@/lib/data'; // Import skills data
// // IMPORTANT: You need to install Shadcn UI components for this to work
// // Run: pnpm dlx shadcn-ui@latest add badge
// import { Badge } from "@/components/ui/badge"; // Adjust path

// export function About() {
//   return (
//     <AnimatedSection id="about" className="container py-16 md:py-24">
//       <div className="max-w-3xl mx-auto text-center">
//         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">About Me</h2>
//         <p className="mt-4 text-lg leading-8 text-muted-foreground">
//           I'm a passionate Full Stack Developer with a knack for solving complex problems and building efficient, user-friendly applications. My experience spans across backend technologies like Python (Django) and C# (ASP.NET Core), frontend frameworks like React and Next.js, and DevOps practices including Docker and cloud deployment.
//         </p>
//         <p className="mt-4 text-lg leading-8 text-muted-foreground">
//           I thrive in collaborative environments and enjoy learning new technologies to continuously improve my skillset. Currently based in Abuja, Nigeria. {/* Update location if needed */}
//         </p>
//       </div>

//       {/* Skills Section */}
//       <div className="mt-16 max-w-4xl mx-auto">
//          <h3 className="text-2xl font-semibold tracking-tight text-center mb-8">My Skills</h3>
//          <div className="flex flex-wrap justify-center gap-3">
//             {skillsData.map((skill) => (
//                <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 rounded-full shadow-sm">
//                  {skill}
//                </Badge>
//             ))}
//          </div>
//       </div>
//     </AnimatedSection>
//   );
// }


// // --- File: src/components/shared/ProjectCard.tsx ---
// import React from 'react';
// import Image from 'next/image'; // Use Next.js Image for optimization
// import Link from 'next/link';
// // IMPORTANT: You need to install Shadcn UI components for this to work
// // Run: pnpm dlx shadcn-ui@latest add card badge button
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust path
// import { Badge } from "@/components/ui/badge"; // Adjust path
// import { Button } from "@/components/ui/button"; // Adjust path
// import { ExternalLink, Github } from 'lucide-react';

// interface ProjectCardProps {
//   project: {
//     title: string;
//     description: string;
//     tags: string[];
//     imageUrl: string;
//     liveUrl: string | null;
//     repoUrl: string | null;
//   };
// }

// export function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <Card className="overflow-hidden flex flex-col h-full shadow-md hover:shadow-lg transition-shadow duration-300">
//       <CardHeader className="p-0">
//         {/* Project Image */}
//         <div className="aspect-video relative overflow-hidden">
//           <Image
//             src={project.imageUrl}
//             alt={project.title}
//             fill // Use fill to cover the container
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
//             style={{ objectFit: 'cover' }} // Cover the area
//             // Add placeholder and blur effect for better loading experience
//             placeholder="blur"
//             blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" // Tiny transparent blur placeholder
//             onError={(e) => {
//               // Fallback in case image fails to load
//               e.currentTarget.src = `https://placehold.co/600x400/eee/ccc?text=Image+Not+Found`;
//             }}
//           />
//         </div>
//       </CardHeader>
//       <CardContent className="p-6 flex-grow">
//         <CardTitle className="mb-2 text-xl font-semibold">{project.title}</CardTitle>
//         <CardDescription className="text-muted-foreground mb-4 text-sm">
//           {project.description}
//         </CardDescription>
//         {/* Tech Stack Tags */}
//         <div className="flex flex-wrap gap-2">
//           {project.tags.map((tag) => (
//             <Badge key={tag} variant="secondary" className="text-xs rounded-full px-2.5 py-0.5">
//               {tag}
//             </Badge>
//           ))}
//         </div>
//       </CardContent>
//       <CardFooter className="p-6 pt-0 flex justify-end gap-3">
//         {/* Links */}
//         {project.repoUrl && (
//           <Button variant="outline" size="sm" asChild>
//             <Link href={project.repoUrl} target="_blank" rel="noreferrer">
//               <Github className="mr-2 h-4 w-4" /> GitHub
//             </Link>
//           </Button>
//         )}
//         {project.liveUrl && (
//           <Button size="sm" asChild>
//             <Link href={project.liveUrl} target="_blank" rel="noreferrer">
//               <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
//             </Link>
//           </Button>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }


// // --- File: src/components/sections/Projects.tsx ---
// import React from 'react';
// import { AnimatedSection } from '@/components/shared/AnimatedSection';
// import { ProjectCard } from '@/components/shared/ProjectCard';
// import { projectsData } from '@/lib/data'; // Import placeholder data

// export function Projects() {
//   return (
//     <AnimatedSection id="projects" className="container py-16 md:py-24 bg-muted/40">
//       <div className="max-w-xl mx-auto text-center mb-12">
//         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">My Projects</h2>
//         <p className="text-lg text-muted-foreground">
//           Here are some of the projects I've worked on.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {projectsData.map((project, index) => (
//           // Add a slight delay to each card animation for a staggered effect
//           <AnimatedSection key={project.title} delay={index * 0.1} tag="div">
//              <ProjectCard project={project} />
//           </AnimatedSection>
//         ))}
//       </div>
//     </AnimatedSection>
//   );
// }


// // --- File: src/components/sections/Experience.tsx ---
// import React from 'react';
// import { AnimatedSection } from '@/components/shared/AnimatedSection';
// import { experienceData } from '@/lib/data'; // Import placeholder data
// // IMPORTANT: You need to install Shadcn UI components for this to work
// // Run: pnpm dlx shadcn-ui@latest add card separator
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust path
// import { Separator } from "@/components/ui/separator"; // Adjust path
// import { Briefcase, MapPin } from 'lucide-react';

// export function Experience() {
//   return (
//     <AnimatedSection id="experience" className="container py-16 md:py-24">
//       <div className="max-w-xl mx-auto text-center mb-12">
//         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Work Experience</h2>
//         <p className="text-lg text-muted-foreground">
//           My professional journey so far.
//         </p>
//       </div>
//       <div className="relative max-w-3xl mx-auto pl-8">
//         {/* Timeline Line */}
//         <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border ml-[calc(0.5rem-1px)]"></div>

//         {experienceData.map((exp, index) => (
//           <AnimatedSection key={index} delay={index * 0.15} tag="div" className="mb-10 relative">
//              {/* Timeline Dot */}
//             <div className="absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-[calc(50%-1px)]"></div>

//             <Card className="ml-8 shadow-sm border">
//               <CardHeader>
//                 <CardTitle className="text-xl font-semibold">{exp.title}</CardTitle>
//                 <div className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 mt-1">
//                    <span className="flex items-center"><Briefcase className="mr-1.5 h-4 w-4" /> {exp.company}</span>
//                    <span className="flex items-center"><MapPin className="mr-1.5 h-4 w-4" /> {exp.location}</span>
//                 </div>
//                  <p className="text-xs text-muted-foreground/80 mt-1">{exp.dates}</p>
//               </CardHeader>
//               <CardContent>
//                 <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
//                   {exp.description.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           </AnimatedSection>
//         ))}
//       </div>
//     </AnimatedSection>
//   );
// }


// // --- File: src/components/sections/Contact.tsx ---
// "use client"; // Needs client-side state for form handling

// import React, { useState } from 'react';
// import { AnimatedSection } from '@/components/shared/AnimatedSection';
// // IMPORTANT: You need to install Shadcn UI components for this to work
// // Run: pnpm dlx shadcn-ui@latest add button input textarea label card toast
// import { Button } from "@/components/ui/button"; // Adjust path
// import { Input } from "@/components/ui/input"; // Adjust path
// import { Textarea } from "@/components/ui/textarea"; // Adjust path
// import { Label } from "@/components/ui/label"; // Adjust path
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust path
// import { useToast } from "@/components/ui/use-toast"; // Adjust path (needs toaster setup in layout)
// import { Loader2, Send } from 'lucide-react';

// export function Contact() {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // --- IMPORTANT ---
//   // This is a placeholder submit handler.
//   // You NEED to replace this with actual form submission logic.
//   // Options:
//   // 1. Next.js Server Action: Recommended for modern Next.js apps.
//   // 2. API Route: Create an API endpoint (e.g., /api/contact) to handle the submission.
//   // 3. Third-party Service: Use services like Formspree, Resend, etc.
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);
//     console.log("Form Data Submitted:", formData); // Log data for now

//     // --- Replace this setTimeout with your actual API call/Server Action ---
//     await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

//     // Example success/error handling (replace with actual response check)
//     const success = Math.random() > 0.3; // Simulate random success/failure

//     if (success) {
//       setSubmitStatus('success');
//       toast({
//         title: "Message Sent!",
//         description: "Thanks for reaching out. I'll get back to you soon.",
//       });
//       setFormData({ name: '', email: '', message: '' }); // Clear form
//     } else {
//       setSubmitStatus('error');
//       toast({
//         title: "Uh Oh!",
//         description: "Something went wrong. Please try again later or email me directly.",
//         variant: "destructive",
//       });
//     }
//     // --- End of placeholder logic ---

//     setIsSubmitting(false);
//   };

//   return (
//     <AnimatedSection id="contact" className="container py-16 md:py-24 bg-muted/40">
//       <div className="max-w-xl mx-auto text-center mb-12">
//         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get In Touch</h2>
//         <p className="text-lg text-muted-foreground">
//           Have a question or want to work together? Send me a message!
//         </p>
//       </div>
//       <Card className="max-w-2xl mx-auto shadow-lg">
//         <CardHeader>
//           <CardTitle>Contact Form</CardTitle>
//           <CardDescription>Fill out the form below and I'll get back to you.</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="your.email@example.com"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                 />
//               </div>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="message">Message</Label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Your message..."
//                 required
//                 rows={5}
//                 value={formData.message}
//                 onChange={handleChange}
//                 disabled={isSubmitting}
//               />
//             </div>
//             <div className="flex justify-end">
//               <Button type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
//                   </>
//                 ) : (
//                   <>
//                     Send Message <Send className="ml-2 h-4 w-4" />
//                   </>
//                 )}
//               </Button>
//             </div>
//              {/* Optional: Display submit status messages */}
//              {/*
//              {submitStatus === 'success' && <p className="text-sm text-green-600 dark:text-green-400 mt-4">Message sent successfully!</p>}
//              {submitStatus === 'error' && <p className="text-sm text-red-600 dark:text-red-400 mt-4">Failed to send message. Please try again.</p>}
//              */}
//           </form>
//         </CardContent>
//       </Card>
//     </AnimatedSection>
//   );
// }


// // --- File: src/app/layout.tsx ---
// import type { Metadata } from "next";
// // Choose a font, e.g., Inter
// import { Inter } from "next/font/google";
// import "./globals.css"; // Your global styles
// import { ThemeProvider } from "@/components/providers/theme-provider";
// import { cn } from "@/lib/utils";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// // IMPORTANT: You need to install Shadcn UI components for this to work
// // Run: pnpm dlx shadcn-ui@latest add toast
// import { Toaster } from "@/components/ui/toaster"; // For displaying toast notifications from Contact form

// // Setup font variable
// const fontSans = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans", // Match variable name in tailwind.config.ts
// });

// export const metadata: Metadata = {
//   title: "Your Name - Full Stack Developer", // CHANGE THIS
//   description: "Portfolio showcasing expertise in Django, ASP.NET Core, React, Next.js, Docker, and more.", // CHANGE THIS
//   // Add more metadata: keywords, open graph tags, etc.
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning> {/* suppressHydrationWarning is often needed with next-themes */}
//       <body
//         className={cn(
//           "min-h-screen bg-background font-sans antialiased",
//           fontSans.variable // Apply font variable class
//         )}
//       >
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system" // Or "dark" or "light"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <div className="relative flex min-h-dvh flex-col bg-background">
//              <Navbar />
//              <main className="flex-1">{children}</main>
//              <Footer />
//           </div>
//           <Toaster /> {/* Add Toaster component here for Shadcn toasts */}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


// // --- File: src/app/page.tsx ---
// // This is the main landing page (route: /)

// import { Hero } from "@/components/sections/Hero";
// import { About } from "@/components/sections/About";
// import { Projects } from "@/components/sections/Projects";
// import { Experience } from "@/components/sections/Experience";
// import { Contact } from "@/components/sections/Contact";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <About />
//       <Projects />
//       <Experience />
//       <Contact />
//     </>
//   );
// }


// // --- File: tailwind.config.ts ---
// // Example structure after running `pnpm dlx shadcn-ui@latest init`
// import type { Config } from "tailwindcss"
// const { fontFamily } = require("tailwindcss/defaultTheme") // Ensure this import is present

// const config = {
//   darkMode: ["class"], // Enables dark mode based on class attribute
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}', // Make sure src directory is included
// 	],
//   prefix: "", // No prefix usually
//   theme: {
//     container: { // Default container settings from Shadcn
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       fontFamily: { // Ensure sans font uses the variable defined in layout.tsx
//         sans: ["var(--font-sans)", ...fontFamily.sans],
//       },
//       colors: { // Example color setup from Shadcn (adjust based on your init choices)
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: { // Example border radius setup from Shadcn
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: { // Required by Shadcn for animations
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: { // Required by Shadcn for animations
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")], // Required by Shadcn
// } satisfies Config

// export default config


// // --- File: src/app/globals.css ---
// /* Basic structure after `pnpm dlx shadcn-ui@latest init` */
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// @layer base {
//   :root {
//     /* Default Light Theme Colors (example - will be generated by shadcn init) */
//     --background: 0 0% 100%;
//     --foreground: 222.2 84% 4.9%;
//     --card: 0 0% 100%;
//     --card-foreground: 222.2 84% 4.9%;
//     --popover: 0 0% 100%;
//     --popover-foreground: 222.2 84% 4.9%;
//     --primary: 222.2 47.4% 11.2%;
//     --primary-foreground: 210 40% 98%;
//     --secondary: 210 40% 96.1%;
//     --secondary-foreground: 222.2 47.4% 11.2%;
//     --muted: 210 40% 96.1%;
//     --muted-foreground: 215.4 16.3% 46.9%;
//     --accent: 210 40% 96.1%;
//     --accent-foreground: 222.2 47.4% 11.2%;
//     --destructive: 0 84.2% 60.2%;
//     --destructive-foreground: 210 40% 98%;
//     --border: 214.3 31.8% 91.4%;
//     --input: 214.3 31.8% 91.4%;
//     --ring: 222.2 84% 4.9%;
//     --radius: 0.5rem; /* Default border radius */
//   }

//   .dark {
//     /* Default Dark Theme Colors (example - will be generated by shadcn init) */
//     --background: 222.2 84% 4.9%;
//     --foreground: 210 40% 98%;
//     --card: 222.2 84% 4.9%;
//     --card-foreground: 210 40% 98%;
//     --popover: 222.2 84% 4.9%;
//     --popover-foreground: 210 40% 98%;
//     --primary: 210 40% 98%;
//     --primary-foreground: 222.2 47.4% 11.2%;
//     --secondary: 217.2 32.6% 17.5%;
//     --secondary-foreground: 210 40% 98%;
//     --muted: 217.2 32.6% 17.5%;
//     --muted-foreground: 215 20.2% 65.1%;
//     --accent: 217.2 32.6% 17.5%;
//     --accent-foreground: 210 40% 98%;
//     --destructive: 0 62.8% 30.6%;
//     --destructive-foreground: 210 40% 98%;
//     --border: 217.2 32.6% 17.5%;
//     --input: 217.2 32.6% 17.5%;
//     --ring: 212.7 26.8% 83.9%;
//     /* --radius will inherit from :root */
//   }
// }

// @layer base {
//   * {
//     @apply border-border; /* Apply border color variable globally */
//   }
//   body {
//     @apply bg-background text-foreground; /* Apply background/text color variables */
//     /* Enable smooth scrolling */
//     scroll-behavior: smooth;
//   }
//   /* Add smooth scroll polyfill for browsers that don't support it if needed */
//   html:focus-within {
//      scroll-behavior: smooth;
//   }

//   /* Basic heading styles */
//   h1, h2, h3, h4, h5, h6 {
//      @apply font-semibold tracking-tight;
//   }
//   h1 { @apply text-4xl lg:text-5xl; }
//   h2 { @apply text-3xl lg:text-4xl; }
//   h3 { @apply text-2xl lg:text-3xl; }
//   /* ... add more base styles as needed */
// }

// /* Add any custom component styles or utilities here */
// /* Example: Custom gradient background */
// /* .gradient-bg {
//   background: linear-gradient(to right, theme('colors.primary.DEFAULT'), theme('colors.secondary.DEFAULT'));
// } */

