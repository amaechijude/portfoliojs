import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}
