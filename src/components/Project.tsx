"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-16 space-y-8" id="projects">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
