import Profile from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Technologies from "@/components/technologies";
import { Separator } from "@/components/ui/separator";
import Contact from "@/components/contact";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-[800px] px-6">
        <Profile />
      </div>

      <TracingBeam className="mx-auto max-w-[800px] px-6">
        <Separator className="mb-12 mt-6" />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Technologies />
        <Separator className="mb-12 mt-24" />
        <Contact />
      </TracingBeam>
    </>
  );
}
