// --- File: src/components/sections/Contact.tsx ---
"use client"; // Needs client-side state for form handling

import React, { useState } from 'react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
// IMPORTANT: You need to install Shadcn UI components for this to work
// Run: pnpm dlx shadcn-ui@latest add button input textarea label card toast
import { Button } from "@/components/ui/button"; // Adjust path
import { Input } from "@/components/ui/input"; // Adjust path
import { Textarea } from "@/components/ui/textarea"; // Adjust path
import { Label } from "@/components/ui/label"; // Adjust path
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust path
// import { useToast } from "@/components/ui/use-toast"; // Adjust path (needs toaster setup in layout)
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';

export function Contact() {
  const handleToast = ((m: string) => toast(m, {duration: 100}));
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- IMPORTANT ---
  // This is a placeholder submit handler.
  // You NEED to replace this with actual form submission logic.
  // Options:
  // 1. Next.js Server Action: Recommended for modern Next.js apps.
  // 2. API Route: Create an API endpoint (e.g., /api/contact) to handle the submission.
  // 3. Third-party Service: Use services like Formspree, Resend, etc.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    console.log("Form Data Submitted:", formData); // Log data for now

    // --- Replace this setTimeout with your actual API call/Server Action ---
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // Example success/error handling (replace with actual response check)
    const success = Math.random() > 0.3; // Simulate random success/failure

    if (success) {
      setSubmitStatus('success');
      handleToast("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } else {
      setSubmitStatus('error');
      handleToast("Failed to send message. Please try again.");
    }
    // --- End of placeholder logic ---

    setIsSubmitting(false);
  };

  return (
    <AnimatedSection id="contact" className="container py-16 md:py-24 bg-muted/40">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get In Touch</h2>
        <p className="text-lg text-muted-foreground">
          Have a question or want to work together? Send me a message!
        </p>
      </div>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
          <CardDescription>Fill out the form below and I&apos;ll get back to you.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
             {/* Optional: Display submit status messages */}
             {/*
             {submitStatus === 'success' && <p className="text-sm text-green-600 dark:text-green-400 mt-4">Message sent successfully!</p>}
             {submitStatus === 'error' && <p className="text-sm text-red-600 dark:text-red-400 mt-4">Failed to send message. Please try again.</p>}
             */}
          </form>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}

