// --- File: src/components/shared/AnimatedSection.tsx ---
"use client"; // Needs client-side Intersection Observer and Framer Motion

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { JSX } from 'react/jsx-runtime';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  tag?: keyof JSX.IntrinsicElements; // Allow specifying the HTML tag (e.g., 'section', 'div')
}

export function AnimatedSection({
  children,
  className,
  id,
  delay = 0,
//   tag = 'section' // Default to 'section'
}: AnimatedSectionProps) {
  const ref = useRef(null);
  // Trigger animation only once when it comes into view
  const isInView = useInView(ref, { once: true, amount: 0.2 }); // Adjust amount as needed

  const MotionComponent = motion['section']; 

  return (
    <MotionComponent
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate to visible and original position
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} // Animation timing
    >
      {children}
    </MotionComponent>
  );
}
