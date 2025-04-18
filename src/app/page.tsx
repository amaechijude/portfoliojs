import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import { Section } from "lucide-react";


export default function Home() {

  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Section id="contact">
        <Contact />
      </Section>
    </>
  );
}
