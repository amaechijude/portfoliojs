"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "your_service_id",
        "your_template_id",
        formRef.current!,
        "your_public_key"
      );

      toast.success("Message sent successfully!");
      formRef.current?.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="max-w-2xl py-16 space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold">Contact Me</h2>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <Input type="text" name="from_name" placeholder="Your name" required />
        <Input
          type="email"
          name="from_email"
          placeholder="Your email"
          required
        />
        <Textarea
          name="message"
          placeholder="Your message"
          required
          className="resize-none"
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.section>
  );
}
