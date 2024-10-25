import Profile from "@/components/profile";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import { Separator } from "@/components/ui/separator";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  return (
    <>
      <TracingBeam>
        <Profile />
        <Separator className="mb-12 mt-6" />
        <About />
        <Experience />
        <Education />
        <Projects />
      </TracingBeam>
    </>
  );
}
