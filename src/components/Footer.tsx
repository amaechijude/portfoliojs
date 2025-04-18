"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      className="mt-16 border-t border-zinc-200 dark:border-zinc-800 py-6 text-sm text-center text-zinc-600 dark:text-zinc-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-zinc-500">
          <Link
            href="https://github.com/your-username"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/your-username"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            target="_blank"
          >
            LinkedIn
          </Link>
          {/* Add more links if you'd like */}
        </div>
      </div>
    </motion.footer>
  );
}
