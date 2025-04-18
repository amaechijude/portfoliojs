"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="py-16 space-y-6 max-w-3xl">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-muted-foreground text-base leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I am a passionate full-stack developer with experience in building
        scalable web applications using <strong>Next.js</strong>,{" "}
        <strong>Django</strong>, and <strong>ASP.NET Core</strong>. I’ve worked
        on SaaS platforms, e-commerce APIs, and offline inventory tools. My
        strength lies in clean architecture, cloud infrastructure (like Azure),
        and delivering real-world solutions.
        <br />
        <br />
        When I am not coding, I&apos;m exploring design systems, animations, or
        fine-tuning my Neovim setup.
      </motion.p>
    </section>
  );
}
